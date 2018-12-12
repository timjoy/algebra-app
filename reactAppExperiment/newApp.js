console.log("learning!!")
//starting with a lowercase letter => React assumes this is html
//starting with uppercase letter => React looks for a variable in scope
class Learnstuff extends React.Component {
  constructor(props) {
    super(props);
    // this.handleAddOne = this.handleAddOne.bind(this);
    let message = "Click here for today's message.";
    this.displayMessage = this.displayMessage.bind(this);
    this.removeMessage = this.removeMessage.bind(this);
    this.state = {
      message : props.message
    };
  };

  displayMessage(){
    this.setState((state)=>{
      return{
        message :  "You are magic!  Own that shit!"
      };
    });
  };
  removeMessage(){
    this.setState((state)=>{
      return{
        message : ""
      };
    });
  };
  render() {
    return (
      <div>
      
        <h1>Learning</h1>
          <button onClick={this.displayMessage}>Click here for today's message.</button>
        <h3>{this.state.message}</h3>
          <button onClick={this.removeMessage}>Click here to remove the message.</button>
      </div>
    );
  };
};

ReactDOM.render(<Learnstuff />, document.getElementById('app'));
// <button onClick={this.displayMess}></button>

