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

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    // this.state = {value: props.value};
    _this.state = {

      fraction: props.fraction
    };
    return _this;
  }

  _createClass(AlgebraApp, [{
    key: 'handleSubmit',


    //write the habndleSubmit function w/ a setState inside it :


    value: function handleSubmit(fraction) {
      var _this2 = this;

      alert('You just submitted the fraction ' + this.state.fraction);
      e.preventDefault();
      console.log('submitted');

      this.setState(function () {
        return {
          fraction: _this2.state.fraction
        };
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {
      this.setState({
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
      return React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        React.createElement(
          'h2',
          null,
          'Type In A Fraction =>'
        ),
        React.createElement(Fraction
        // fraction={this.state.fraction}
        // wholeNumber={this.state.wholeNumber}
        // wholeNumber={this.state.wholeNumber}
        // handleChange={this.handleChange}
        , { handleSubmit: this.handleSubmit
        })
      );
    }
  }]);

  return AlgebraApp;
}(React.Component);

;
// const Action = (props) => { 
//change Fraction to a class

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    )
  );
};
Header.defaultProps = {
  title: 'Algebra App'
};

var Fraction = function (_React$Component2) {
  _inherits(Fraction, _React$Component2);

  function Fraction(props) {
    _classCallCheck(this, Fraction);

    // this.state = {wholeNumber: props.wholeNumber,
    //   fraction: props.fraction};
    var _this3 = _possibleConstructorReturn(this, (Fraction.__proto__ || Object.getPrototypeOf(Fraction)).call(this, props));

    _this3.state = {
      value: ''
      // fraction: props.fraction};
    };_this3.handleChange = _this3.handleChange.bind(_this3);
    _this3.handleSubmit = _this3.handleSubmit.bind(_this3);
    return _this3;
  }

  _createClass(Fraction, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
      // this.setState({fraction: event.target.fraction});
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {

      // alert ('You just submitted the fraction '+ this.state.fraction);
      alert('You just submitted the fraction ' + this.state.value);
      console.log('submitted');
      event.preventDefault();
      // const fraction = e.target.elements.option.value;
      // this.setState(() => ({ 
      //   fraction: this.state.fraction
      // }));
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            'Type Fraction Here:',
            React.createElement('input', {
              type: 'number'
              // fraction={this.state.fraction}
              , value: this.state.value,
              onChange: this.handleChange
              // value={props.fraction} 
            })
          ),
          React.createElement('br', null),
          React.createElement('input', { type: 'submit', value: 'Submit' })
        )
      );
    }
  }]);

  return Fraction;
}(React.Component);

;

ReactDOM.render(React.createElement(AlgebraApp, null), document.getElementById('app'));
