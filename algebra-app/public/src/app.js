class AlgebraApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ' '};
    /* this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this); */
    
  };
  
  render(){
    return (
      <div>
        <h1>Algebra App</h1>
          <h2>Type In A Fraction =></h2>
          <form>
            <label>
              Fraction:
                < input type="text" value={this.state.value} />
            </label>
            
          </form>
      </div>
    );
  };
};



ReactDOM.render(<AlgebraApp />, document.getElementById('app'));

