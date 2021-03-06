'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _pages = require('./pages');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*--------------------------------------------------------------------------------------------------------------------*/
//  --- SITE MAP ---
/*--------------------------------------------------------------------------------------------------------------------*/
var publicSrc = _path2.default.join(__dirname, '../public/');
var appSrc = _path2.default.join(publicSrc, './app.js');
var robotsSrc = _path2.default.join(publicSrc, './robots.txt');
var sitemapSrc = _path2.default.join(publicSrc, './sitemap.xml');
var faviconSrc = _path2.default.join(publicSrc, './favicon.ico');
var todoCssSrc = _path2.default.join(__dirname, '../node_modules/todomvc-app-css/index.css');

exports.default = _react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: _pages.PageWrapper },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _pages.ListPage }),
      _react2.default.createElement(_reactRouter.Route, { path: 'active', component: _pages.ActiveListPage }),
      _react2.default.createElement(_reactRouter.Route, { path: 'completed', component: _pages.CompletedListPage })
    ),
    _react2.default.createElement(_reactRouter.Route, { path: '/app.js', src: appSrc }),
    _react2.default.createElement(_reactRouter.Route, { path: '/robots.txt', src: robotsSrc }),
    _react2.default.createElement(_reactRouter.Route, { path: '/sitemap.xml', src: sitemapSrc }),
    _react2.default.createElement(_reactRouter.Route, { path: '/favicon.ico', src: faviconSrc }),
    _react2.default.createElement(_reactRouter.Route, { path: '/node_modules/todomvc-app-css/index.css', src: todoCssSrc })
  )
);