import express from 'express';
import compression from 'compression';
import cors from 'cors';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import App from '../shared/App';
import { fetchNewsData } from '../shared/api';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(compression());
app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const pageNum = parseInt(req.query.page) || 0;
  fetchNewsData(pageNum).then((data) => {
    const context = {};
    res.write(`
         <!DOCTYPE html>
         <html lang="en">
           <head>
            <meta charset="utf-8">
             <meta http-equiv="X-UA-Compatible" content="IE=edge">
             <meta name="viewport" content="width=device-width, initial-scale=1">
             <meta name=description content="news list display">
             <title>SSR with RR</title>
             <script src="/bundle.js" defer></script>
             <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
           </head
           <body><div id="app">
      `);
    const sheet = new ServerStyleSheet();
    const jsx = sheet.collectStyles(
      <StaticRouter location={req.url} context={context}>
        <App data={data} />
      </StaticRouter>
    );
    // Interleave the HTML stream with <style> tags
    const stream = sheet.interleaveWithNodeStream(renderToNodeStream(jsx));

    // Pipe that HTML to the response
    stream.pipe(res, { end: false });
    // When React is finished, clean up the dangling HTML tags
    stream.on('end', () => res.end('</div></body></html>'));
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port: 3000`);
});
