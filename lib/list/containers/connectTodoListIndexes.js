'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectCompletedTodoListIndexes = exports.connectActiveTodoListIndexes = undefined;

var _reactRedux = require('react-redux');

var _recompose = require('recompose');

var _selectors = require('../selectors');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function createConnectTodoListIndexes(filter) {
  return (0, _recompose.compose)((0, _reactRedux.connect)(function (state) {
    return (0, _selectors.getItemIndexes)(state, filter);
  }), (0, _recompose.mapProps)(function (_ref) {
    var dispatch = _ref.dispatch,
        otherProps = _objectWithoutProperties(_ref, ['dispatch']);

    return otherProps;
  }));
}

exports.default = createConnectTodoListIndexes();
var connectActiveTodoListIndexes = exports.connectActiveTodoListIndexes = createConnectTodoListIndexes('active');
var connectCompletedTodoListIndexes = exports.connectCompletedTodoListIndexes = createConnectTodoListIndexes('completed');