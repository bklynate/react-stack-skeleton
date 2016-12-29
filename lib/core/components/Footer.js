'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * The footer for the site.
 */
function Footer(_ref) {
  var otherProps = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(
    'footer',
    otherProps,
    'NYI: Footer'
  );
}