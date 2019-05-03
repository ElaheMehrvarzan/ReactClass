import React from 'react';
import logo from './images/Logo.svg';
import './App.css';


class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        email:"",
        password:""
      }
    }
    handleChange(e){
      console.log(e.target.value);
      this.setState({email:e.target.value})
    }

    

  render(){

    return(
      <div className="App">
      <div className="container">
        <img src= {logo} id="logoId" />
        
        <input id="username" className="inputClass" placeholder = "username" onChange = {(e) => this.handleChange(e)} />
        <input id="password" className="inputClass" placeholder = "password"/>
        <button id="submit" className="inputClass">
          login
        </button>
      </div>
        
      </div>
    )
  }
}



/*
function App() {
  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:""
    }
  }
  handleChange(e){
    console.log("react");
  }
  return (
    <div className="App">
    <div className="container">
      <img src= {logo} id="logoId" />
      <input id="username" className="inputClass" placeholder = "username" onChange = {(e) => this.handleChange(e)} />
      <input id="password" className="inputClass" placeholder = "password"/>
      <button id="submit" className="inputClass">
        login
      </button>
    </div>
      
    </div>
  );
}*/

export default App;
