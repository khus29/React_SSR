/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchNewsData = undefined;

var _isomorphicFetch = __webpack_require__(15);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchNewsData = exports.fetchNewsData = function fetchNewsData(page) {
  var encoded = encodeURI('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=20&page=' + page);
  return (0, _isomorphicFetch2.default)(encoded).then(function (data) {
    return data.json();
  }).then(function (item) {
    return item.hits;
  }).catch(function (error) {
    console.log('Error occured', error);
    return null;
  });
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: #f6f6f0;\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 10px;\n  padding: 8px 10px 8px 40px;\n\n  &:nth-child(odd) {\n    background-color: #e6e6e0;\n  }\n\n  &.hide {\n    display: none;\n  }\n  &.pagination {\n    padding: 25px 100px;\n  }\n  .more-link {\n    color: #ff4500;\n    font-size: 15px;\n    text-decoration: none;\n  }\n'], ['\n  background-color: #f6f6f0;\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 10px;\n  padding: 8px 10px 8px 40px;\n\n  &:nth-child(odd) {\n    background-color: #e6e6e0;\n  }\n\n  &.hide {\n    display: none;\n  }\n  &.pagination {\n    padding: 25px 100px;\n  }\n  .more-link {\n    color: #ff4500;\n    font-size: 15px;\n    text-decoration: none;\n  }\n']);

exports.default = ListChild;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Li = _styledComponents2.default.li(_templateObject);
function ListChild(_ref) {
  var className = _ref.className,
      children = _ref.children;

  return _react2.default.createElement(
    Li,
    { className: className },
    children
  );
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param {Array} date - date in milliseconds
 * @returns {String} - Formated date
 */
var timeSinceFormat = exports.timeSinceFormat = function timeSinceFormat(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + ' years ago';
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + ' months ago';
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' days ago';
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' hours ago';
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + ' minutes ago';
  }
  return Math.floor(seconds) + ' seconds ago';
};

/**
 * @param {Array} url - url link from API
 * @returns {String} - domain name from complete url
 */
var getDomain = exports.getDomain = function getDomain(url) {
  if (!url) return '';
  var splitArr = url.split('/');
  return splitArr[2];
};

/**
 * @param {String} key - local storage key
 * @param {String} value - value of localstorage
 */
var setLocalstorage = exports.setLocalstorage = function setLocalstorage(key, value) {
  if (typeof window !== 'undefined') {
    var existing = localStorage.getItem(key);
    existing = existing ? existing.split(',') : [];
    existing.push(value);
    localStorage.setItem(key, existing.toString());
  }
};

/**
 * @param {String} key - key of localstorage
 * @returns {Array} - value stored in localstorage
 */
var getLocalstorage = exports.getLocalstorage = function getLocalstorage(key) {
  if (typeof window !== 'undefined') {
    var objectIds = localStorage && localStorage.getItem(key) && localStorage.getItem(key).split(',');
    return objectIds;
  }
  return [];
};
/**
 * @param {String} key - session storage key
 * @param {Json} value - value of session storage
 */
var setSessionStorage = exports.setSessionStorage = function setSessionStorage(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
};
/**
 * @param {String} key - key of sessionStorage
 * @returns {Json} - value stored in sessionStorage
 */
var getSessionStorage = exports.getSessionStorage = function getSessionStorage(key) {
  if (typeof window !== 'undefined') {
    return JSON.parse(sessionStorage.getItem(key));
  }
  return {};
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(8);

var _cors2 = _interopRequireDefault(_cors);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(9);

var _serializeJavascript = __webpack_require__(10);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactRouterDom = __webpack_require__(2);

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

var _api = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;
app.use((0, _cors2.default)());
app.use(_express2.default.static('public'));

app.get('*', function (req, res, next) {
  var pageNum = parseInt(req.query.page) || 0;
  (0, _api.fetchNewsData)(pageNum).then(function (data) {
    var context = {};
    var markup = (0, _server.renderToString)(_react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: context },
      _react2.default.createElement(_App2.default, { data: data })
    ));

    res.send('\n      <!DOCTYPE html>\n      <html lang="en">\n        <head>\n          <meta charset="utf-8">\n          <meta http-equiv="X-UA-Compatible" content="IE=edge">\n          <meta name="viewport" content="width=device-width, initial-scale=1">\n          <meta name=description content="news list display">\n          <title>SSR with RR</title>\n          <script src="/bundle.js" defer></script>\n          <script>window.__INITIAL_DATA__ = ' + (0, _serializeJavascript2.default)(data) + '</script>\n        </head>\n\n        <body>\n          <div id="app">' + markup + '</div>\n        </body>\n      </html>\n    ');
  });
});

app.listen(port, function () {
  console.log('Server is listening on port: 3000');
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _News = __webpack_require__(12);

var _News2 = _interopRequireDefault(_News);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var data1 = {
  hits: [{
    created_at: '2020-04-07T06:41:44.000Z',
    title: 'The private and public lives of Albert Einstein',
    url: 'https://www.the-tls.co.uk/articles/the-public-and-private-lives-of-albert-einstein-p-d-smith/',
    author: 'okfine',
    points: 44,
    story_text: null,
    comment_text: null,
    num_comments: 11,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1586241704,
    _tags: ['story', 'author_okfine', 'story_22800880', 'front_page'],
    objectID: '22800880'
  }, {
    created_at: '2020-04-08T01:56:38.000Z',
    title: "Show HN: Rust Implementation of Conway's Game of Life",
    url: 'https://github.com/brundonsmith/life',
    author: 'brundolf',
    points: 40,
    story_text: null,
    comment_text: null,
    num_comments: 12,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1586310998,
    _tags: ['story', 'author_brundolf', 'story_22809378', 'show_hn', 'front_page'],
    objectID: '22809378'
  }, {
    created_at: '2020-04-07T00:56:44.000Z',
    title: 'Welcome to DiscDAG',
    url: 'https://www.solipsys.co.uk/DiscDAG.html',
    author: 'mr_tyzic',
    points: 33,
    story_text: null,
    comment_text: null,
    num_comments: 9,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1586221004,
    _tags: ['story', 'author_mr_tyzic', 'story_22799411', 'front_page'],
    objectID: '22799411'
  }]
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var newsData = this.props.data ? this.props.data : window.__INITIAL_DATA__;
      return _react2.default.createElement(_News2.default, { data: newsData });
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NewsList = __webpack_require__(13);

var _NewsList2 = _interopRequireDefault(_NewsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var News = function News(_ref) {
  var data = _ref.data;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_NewsList2.default, { data: data })
  );
};
exports.default = News;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background-color: #ff4500;\n  margin-left: 40px;\n  padding: 10px 20px;\n'], ['\n  background-color: #ff4500;\n  margin-left: 40px;\n  padding: 10px 20px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _queryString = __webpack_require__(14);

var _queryString2 = _interopRequireDefault(_queryString);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _api = __webpack_require__(3);

var _List = __webpack_require__(16);

var _List2 = _interopRequireDefault(_List);

var _reactRouterDom = __webpack_require__(2);

var _ListChild = __webpack_require__(4);

var _ListChild2 = _interopRequireDefault(_ListChild);

var _ListItem = __webpack_require__(17);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _helpers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Div = _styledComponents2.default.div(_templateObject);

var NewsList = function (_Component) {
  _inherits(NewsList, _Component);

  function NewsList(props) {
    _classCallCheck(this, NewsList);

    var _this = _possibleConstructorReturn(this, (NewsList.__proto__ || Object.getPrototypeOf(NewsList)).call(this, props));

    _this.state = {
      currentPage: 0,
      newsData: props.data
    };
    return _this;
  }

  _createClass(NewsList, [{
    key: 'handlePageChange',
    value: function handlePageChange(pageNum) {
      var _this2 = this;

      (0, _api.fetchNewsData)(pageNum).then(function (data) {
        _this2.setState({
          currentPage: pageNum,
          newsData: data
        });
      });
    }
  }, {
    key: 'hideNews',
    value: function hideNews(e) {
      var parentDiv = e.target.parentElement;
      var objectId = parentDiv.getAttribute('id');
      parentDiv.parentElement && parentDiv.parentElement.classList.add('hide');

      (0, _helpers.setLocalstorage)('objectId', objectId);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          newsData = _state.newsData,
          currentPage = _state.currentPage;


      var url = typeof window !== 'undefined' && window.location.search;
      var values = _queryString2.default.parse(url);
      var nextPage = +currentPage + 1;
      if (values.page && currentPage !== values.page) {
        this.handlePageChange(values.page);
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Page number : ',
          currentPage
        ),
        _react2.default.createElement(
          Div,
          null,
          'top | new'
        ),
        _react2.default.createElement(
          _List2.default,
          null,
          _react2.default.createElement(
            _react2.default.Fragment,
            null,
            newsData && newsData.map(function (item) {
              return _react2.default.createElement(_ListItem2.default, {
                key: item.objectID,
                item: item,
                hideNewsHandler: _this3.hideNews
              });
            }),
            _react2.default.createElement(
              _ListChild2.default,
              { className: 'pagination' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                {
                  to: '?page=' + nextPage,
                  className: 'more-link',
                  'aria-label': 'click here for more news'
                },
                'More News'
              )
            )
          )
        )
      );
    }
  }]);

  return NewsList;
}(_react.Component);

exports.default = NewsList;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  list-style: none;\n  margin-top: 0;\n'], ['\n  list-style: none;\n  margin-top: 0;\n']);

exports.default = List;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Ul = _styledComponents2.default.ul(_templateObject);
function List(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    Ul,
    null,
    children
  );
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ListChild = __webpack_require__(4);

var _ListChild2 = _interopRequireDefault(_ListChild);

var _Icon = __webpack_require__(18);

var _Icon2 = _interopRequireDefault(_Icon);

var _Span = __webpack_require__(20);

var _Span2 = _interopRequireDefault(_Span);

var _Anchor = __webpack_require__(21);

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Button = __webpack_require__(22);

var _Button2 = _interopRequireDefault(_Button);

var _helpers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem(props) {
    _classCallCheck(this, ListItem);

    var _this = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

    _this.state = {
      hideNews: false,
      upVoteValue: props.item.points
    };
    return _this;
  }

  _createClass(ListItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var item = this.props.item;
      var objectID = item.objectID,
          points = item.points;
      //hiden news handling

      var hiddenObjectIds = (0, _helpers.getLocalstorage)('objectId');
      var isNewsHidden = false;
      if (hiddenObjectIds && hiddenObjectIds.includes(objectID)) {
        isNewsHidden = true;
      }

      //updated upvotes handling
      var upVotesArray = (0, _helpers.getSessionStorage)('upVotes');
      var upVote = points;
      if (upVotesArray && upVotesArray[objectID]) {
        upVote = upVotesArray[objectID];
      }

      //set state
      if (isNewsHidden) {
        this.setState({ hideNews: isNewsHidden });
      } else if (upVote !== points) {
        this.setState({ upVoteValue: upVote });
      }
    }
  }, {
    key: 'upVoteHandler',
    value: function upVoteHandler() {
      var item = this.props.item;
      var upVoteValue = this.state.upVoteValue;
      var objectID = item.objectID;

      var totalPoints = upVoteValue + 1;

      var obj = _extends({}, (0, _helpers.getSessionStorage)('upVotes'), _defineProperty({}, objectID, totalPoints));
      (0, _helpers.setSessionStorage)('upVotes', obj);
      this.setState({ upVoteValue: totalPoints });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          item = _props.item,
          hideNewsHandler = _props.hideNewsHandler;
      var _state = this.state,
          hideNews = _state.hideNews,
          upVoteValue = _state.upVoteValue;

      return _react2.default.createElement(
        _ListChild2.default,
        { className: '' + (hideNews ? 'hide' : '') },
        _react2.default.createElement(
          'div',
          { id: item.objectID },
          _react2.default.createElement(
            _Span2.default,
            { className: 'comments' },
            item.num_comments
          ),
          _react2.default.createElement(
            _Span2.default,
            { className: 'upvotes' },
            upVoteValue
          ),
          _react2.default.createElement(
            _Button2.default,
            {
              className: 'upvote-link',
              onClickHandler: this.upVoteHandler.bind(this),
              ariaLabel: 'arrow'
            },
            _react2.default.createElement(_Icon2.default, { type: 'arrow' })
          ),
          _react2.default.createElement(
            _Span2.default,
            { className: 'title' },
            item.title
          ),
          _react2.default.createElement(
            _Anchor2.default,
            { className: 'link', href: item.url },
            '(',
            (0, _helpers.getDomain)(item.url),
            ')'
          ),
          _react2.default.createElement(
            _Span2.default,
            { className: 'author' },
            'by ',
            item.author
          ),
          _react2.default.createElement(
            _Span2.default,
            { className: 'timeStamp' },
            (0, _helpers.timeSinceFormat)(item.created_at_i)
          ),
          _react2.default.createElement(
            _Button2.default,
            { className: 'hide-link', onClickHandler: hideNewsHandler },
            '[hide]'
          )
        )
      );
    }
  }]);

  return ListItem;
}(_react.Component);

exports.default = ListItem;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _io = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var type = _ref.type;
  return _react2.default.createElement(_io.IoMdPlay, null);
};

exports.default = Icon;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &.comments {\n    margin-right: 30px;\n  }\n  &.upvotes,\n  &.author,\n  &.timeStamp {\n    margin-right: 10px;\n  }\n  &.title {\n    font-size: 13px;\n    margin-right: 5px;\n  }\n  &.timeStamp {\n    color: #828286;\n  }\n'], ['\n  &.comments {\n    margin-right: 30px;\n  }\n  &.upvotes,\n  &.author,\n  &.timeStamp {\n    margin-right: 10px;\n  }\n  &.title {\n    font-size: 13px;\n    margin-right: 5px;\n  }\n  &.timeStamp {\n    color: #828286;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SpanTag = _styledComponents2.default.span(_templateObject);

var Span = function Span(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    SpanTag,
    { className: className },
    children
  );
};

exports.default = Span;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-right: 10px;\n  &.link {\n    color: #828286;\n  }\n  &.hide_link {\n    cursor: pointer;\n  }\n'], ['\n  margin-right: 10px;\n  &.link {\n    color: #828286;\n  }\n  &.hide_link {\n    cursor: pointer;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AnchorTag = _styledComponents2.default.a(_templateObject);

var Anchor = function Anchor(_ref) {
  var className = _ref.className,
      children = _ref.children,
      href = _ref.href;
  return _react2.default.createElement(
    AnchorTag,
    { className: className, href: href },
    children
  );
};

exports.default = Anchor;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &.hide-link,\n  &.upvote-link {\n    background: transparent;\n    border: 0;\n    cursor: pointer;\n  }\n\n  &.upvote-link {\n    padding: 0;\n    margin: 0;\n    svg {\n      fill: #9c9c9c;\n      margin-right: 10px;\n      transform: rotate(-90deg);\n    }\n  }\n'], ['\n  &.hide-link,\n  &.upvote-link {\n    background: transparent;\n    border: 0;\n    cursor: pointer;\n  }\n\n  &.upvote-link {\n    padding: 0;\n    margin: 0;\n    svg {\n      fill: #9c9c9c;\n      margin-right: 10px;\n      transform: rotate(-90deg);\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonTag = _styledComponents2.default.button(_templateObject);

var Button = function Button(_ref) {
  var className = _ref.className,
      children = _ref.children,
      onClickHandler = _ref.onClickHandler,
      ariaLabel = _ref.ariaLabel;
  return _react2.default.createElement(
    ButtonTag,
    {
      className: className,
      onClick: onClickHandler,
      'aria-label': ariaLabel
    },
    children
  );
};

exports.default = Button;

/***/ })
/******/ ]);