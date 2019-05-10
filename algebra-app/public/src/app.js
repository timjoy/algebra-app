//to do: 1. differentiate the array - fractions, from members of the array - fraction;
//maybe make a const called fraction, and change the class name to fractions
//2. we will render this in the return statement:
//<div>
//  {this.props.fractions.map((fraction) => <Fraction key={fraction} />)}
//</div>
class AlgebraApp extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this); 
   
    this.state = {
      fraction: props.fraction,
      convertedFraction: props.convertedFraction
    };
  };
  
  
  
  
  handleSubmit(fraction) {
    
    alert ('You just submitted the fraction '+ this.state.fraction);
    e.preventDefault();
    console.log('submitted')
    
    this.setState(() => ({ 
      fraction: this.state.fraction,
    }));
  };
    
  handleChange() {
    this.setState({
      fraction: this.state.fraction});
      console.log(this.state.fraction)
  }
  
  render(){
    
    return (
      <div>
        <Header />
          
        <Fraction 
          fraction={fraction}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <ConvertedFraction
          convertedFraction={convertedFraction}
        />
      </div>
    );
  };
}; 

 const ConvertedFraction = (props) => {
    return (
      <div>

      </div>
    )
  };
AlgebraApp.defaultProps = {
  fraction: [],
  convertedFraction: []
};

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

class Convert extends React.Component { 
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  };  
  alert ('You just submitted the fraction'+ this.state.fraction);
  e.preventDefault();
  console.log('submitted')
  
  this.setState(() => ({ 
    fraction: this.state.fraction,
  }));
};
class ConvertedFraction extends React.Component {
  constructor(props){
  super(props);
  };
  render(){
    return (
      <div>
        <p>This is from ConvertedFraction</p>
        {this.props.convertedFraction}
      </div>
    );
  };
}
class Fraction extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    fraction: {props.fraction[0]},
    convertedFraction: {this.state.convertedFraction}
  } 
   
  };
  handleChange(event) {
   this.setState({ [event.target.name]: event.target.value});
  }
  
  

    
  render(){
    return  (
      <div>  
        <form onSubmit={this.handleSubmit}>
          <br />
          <label> 
            Type Fraction Here:
            <input 
              type="number" 
              name="fraction"
              onChange={this.handleChange} 
            />
          </label>
          <br />
          <button onClick={this.handleSubmit}>
            Convert the Fraction
          </button>
        </form>
          <br />
        Converted Fraction:
          {this.state.convertedFraction}
      </div>
        
    );
  };

  // const ConvertedFraction = (props) => {
  //   return (
  //     <div>

  //     </div>
  //   )
  // }
};

      
ReactDOM.render(<AlgebraApp />, document.getElementById('app'));



