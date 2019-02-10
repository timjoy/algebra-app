'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlgebraApp = function (_React$Component) {
  _inherits(AlgebraApp, _React$Component);

  function AlgebraApp(props) {
    _classCallCheck(this, AlgebraApp);

    var _this = _possibleConstructorReturn(this, (AlgebraApp.__proto__ || Object.getPrototypeOf(AlgebraApp)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    // this.state = {value: props.value};
    _this.state = {
      wholeNumber: props.wholeNumber,
      fraction: props.fraction
    };
    return _this;
  }

  _createClass(AlgebraApp, [{
    key: 'handleSubmit',


    //write the habndleSubmit function w/ a setState inside it :


    value: function handleSubmit() {

      alert('You just submitted the fraction ' + this.state.fraction);
      e.preventDefault();
      console.log('submitted');

      this.setState(function () {
        return {
          fraction: 1
          // fraction: this.state.fraction,
          // wholeNumber: this.state.wholeNumber
        };
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {
      this.setState({ wholeNumber: this.state.wholeNumber,
        fraction: this.state.fraction });
      // alert ('handleChange is working');
      console.log(this.state.fraction);
      // this.setState({value: event.target.value});
      // this.setState({value: state.name.value});

      console.log('typing!!');
    }
  }, {
    key: 'render',
    value: function render() {
      var _React$createElement;

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
        React.createElement(Fraction, (_React$createElement = {
          fraction: this.state.fraction,
          wholeNumber: this.state.wholeNumber
        }, _defineProperty(_React$createElement, 'wholeNumber', this.state.wholeNumber), _defineProperty(_React$createElement, 'handleChange', this.handleChange), _defineProperty(_React$createElement, 'handleSubmit', this.handleSubmit), _React$createElement))
      );
    }
  }]);

  return AlgebraApp;
}(React.Component);

;
// const Action = (props) => { 
//change Fraction to a class
var Fraction = function Fraction(props) {

  return React.createElement(
    'div',
    null,
    React.createElement(
      'form',
      { onSubmit: props.handleSubmit },
      React.createElement(
        'label',
        null,
        'Whole Number:',
        React.createElement('input', {
          type: 'number',
          name: 'wholeNumber',
          onChange: props.handleChange,
          value: props.wholeNumber
        })
      ),
      React.createElement('br', null),
      React.createElement(
        'label',
        null,
        'Fraction:',
        React.createElement('input', {
          type: 'number',
          name: 'fraction',
          onChange: props.handleChange,
          value: props.fraction
        })
      ),
      React.createElement('br', null),
      React.createElement('input', { type: 'submit', name: 'Submit' })
    )
  );
};

ReactDOM.render(React.createElement(AlgebraApp, null), document.getElementById('app'));
