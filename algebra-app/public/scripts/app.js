'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlgebraApp = function (_React$Component) {
  _inherits(AlgebraApp, _React$Component);

  function AlgebraApp(props) {
    _classCallCheck(this, AlgebraApp);

    var _this = _possibleConstructorReturn(this, (AlgebraApp.__proto__ || Object.getPrototypeOf(AlgebraApp)).call(this, props));

    _this.state = { value: ' ' };
    /* this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this); */

    return _this;
  }

  _createClass(AlgebraApp, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Algebra App'
        ),
        React.createElement(
          'h2',
          null,
          'Type In A Fraction =>'
        ),
        React.createElement(
          'form',
          null,
          React.createElement(
            'label',
            null,
            'Fraction:',
            React.createElement('input', { type: 'text', value: this.state.value })
          )
        )
      );
    }
  }]);

  return AlgebraApp;
}(React.Component);

;

ReactDOM.render(React.createElement(AlgebraApp, null), document.getElementById('app'));
