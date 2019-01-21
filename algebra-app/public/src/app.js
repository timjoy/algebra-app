class AlgebraApp extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this); 
    this.state = {value: props.value};
  };
  //write the habndleSubmit function w/ a setState inside it :
  handleSubmit(event) {
    alert ('You just submitted the fraction'+ this.state.value);
    e.preventDefault();
    this.setState(prevState => ({
      value: this.state.value
    }));
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  };

  render(){
    return (
      <div>
        <h1>Algebra App</h1>
          <h2>Type In A Fraction =></h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Fraction:
              <input type="text" onChange={this.handleChange} value={this.state.value} />
            </label>
            <input type="submit" value="Submit" />
          </form>
      </div>
    );
  };
};

AlgebraApp.defaultProps = {
  value: ''
};

ReactDOM.render(<AlgebraApp />, document.getElementById('app'));



/* handleAddOption(option) {
  if (!option) {
    return 'Enter valid value to add item';
  } else if (this.state.options.indexOf(option) > -1) {
    return 'This option already exists';
  }

  this.setState((prevState) => ({
    options: prevState.options.concat(option)
  }));
} */