import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import App from '../shared/App';
import { fetchNewsData } from '../shared/api';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const pageNum = parseInt(req.query.page) || 0;
  fetchNewsData(pageNum).then((data) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App data={data} />
      </StaticRouter>
    );

    res.send(`
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
        </head>

        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `);
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port: 3000`);
});
