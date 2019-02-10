class AlgebraApp extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this); 
    // this.state = {value: props.value};
    this.state = {
      wholeNumber: props.wholeNumber,
      fraction: props.fraction
    };
  };
  
  //write the habndleSubmit function w/ a setState inside it :
  
  
  handleSubmit() {
    
    alert ('You just submitted the fraction '+ this.state.fraction);
    e.preventDefault();
    console.log('submitted')
    
    this.setState(() => ({ 
      fraction: 1
      // fraction: this.state.fraction,
      // wholeNumber: this.state.wholeNumber
    }));
  };
    
  handleChange() {
    this.setState({wholeNumber: this.state.wholeNumber,
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
        <h1>Algebra App</h1>
          <h2>Type In A Fraction =></h2>
        <Fraction
          fraction={this.state.fraction}
          wholeNumber={this.state.wholeNumber}
          wholeNumber={this.state.wholeNumber}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  };
};  
// const Action = (props) => { 
//change Fraction to a class
const Fraction = (props) => {
  
    return  (
        <div>  
          <form onSubmit={props.handleSubmit}>
            <label>
              Whole Number:
              <input 
                type="number" 
                name="wholeNumber"
                onChange={props.handleChange} 
                value={props.wholeNumber} 
              />
            </label>
            <br />
            <label> 
               Fraction:
               <input 
                type="number" 
                name="fraction"
                onChange={props.handleChange} 
                value={props.fraction} 
               />
            </label>
            <br />
            <input type="submit" name="Submit" />
          </form>
        </div>
    );
};

      
ReactDOM.render(<AlgebraApp />, document.getElementById('app'));



