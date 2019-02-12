class AlgebraApp extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this); 
    // this.state = {value: props.value};
    this.state = {
      
      fraction: props.fraction
    };
  };
  
  //write the habndleSubmit function w/ a setState inside it :
  
  
  handleSubmit(fraction) {
    
    alert ('You just submitted the fraction '+ this.state.fraction);
    e.preventDefault();
    console.log('submitted')
    
    this.setState(() => ({ 
      fraction: this.state.fraction
    }));
  };
    
  handleChange() {
    this.setState({
      fraction: this.state.fraction});
    // alert ('handleChange is working');
    console.log(this.state.fraction)
    // this.setState({value: event.target.value});
    // this.setState({value: state.name.value});
    
    console.log('typing!!')
  }
  
  render(){
    return (
      <div>
        <Header/>
          <h2>Type In A Fraction =></h2>
        <Fraction
          // fraction={this.state.fraction}
          // wholeNumber={this.state.wholeNumber}
          // wholeNumber={this.state.wholeNumber}
          // handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  };
};  
// const Action = (props) => { 
//change Fraction to a class

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      
    </div>
  );
};
Header.defaultProps = {
  title: 'Algebra App'
};

class Fraction extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {wholeNumber: props.wholeNumber,
    //   fraction: props.fraction};
    this.state = {
      value: ''}
      // fraction: props.fraction};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleChange(event) {
    this.setState({value: event.target.value});
    // this.setState({fraction: event.target.fraction});
  }
  handleSubmit(event) {
    
    // alert ('You just submitted the fraction '+ this.state.fraction);
    alert ('You just submitted the fraction '+ this.state.value);
    console.log('submitted');
    event.preventDefault();
    // const fraction = e.target.elements.option.value;
    // this.setState(() => ({ 
    //   fraction: this.state.fraction
    // }));
  };

    
  render(){
    return  (
        <div>  
          <form onSubmit={this.handleSubmit}>
            <br />
            <label> 
              Type Fraction Here:
              <input 
                type="number" 
                // fraction={this.state.fraction}
                value={this.state.value}
                onChange={this.handleChange} 
                // value={props.fraction} 
              />
            </label>
            <br />
            <input type="submit" value="Submit"/>
          </form>
        </div>
    );
  };
};

      
ReactDOM.render(<AlgebraApp />, document.getElementById('app'));



