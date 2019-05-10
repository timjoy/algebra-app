class AlgebraApp extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this); 
   
    this.state = {
      fraction: props.fraction,
      
    };
  };