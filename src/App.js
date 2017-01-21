import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    // Set the initial state
    this.state = {
      id:'',
      name: '',
      answers: {
        q1:'',
        q2:'',
        q3:'',
        q4:''
      },
      submitted: false
    }
  }

  handleNameSubmit(event) {
    var name = this.refs.name.value;
    this.setState({name:name}, function() {
      console.log(this.state);
    });
    
    event.preventDefault();
  }

  handleQuestionSubmit(event) {

  }

  render() {
    var user;
    var questions;

    if (this.state.name && this.state.submitted === false) {
      user = <h2>Welcome {this.state.name}</h2>
      questions = <span>
        <h3>Survey Questions</h3>
        <form onSubmit={this.handleQuestionSubmit.bind(this)}>
          <div>
            <label>What is your favorite operating system?</label>
            <input type="radio" name="q1" value="Windows" />Windows<br />
          </div>
        </form>
      </span>
    } else if (!this.state.name && this.state.submitted === false) {
      user = <span>
                <h2>Please enter your name to begin the survey</h2>
                <form onSubmit={this.handleNameSubmit.bind(this)}>
                  <input type="text" placeholder="Enter Name..." ref="name" />
                </form>
              </span>
              questions = '';
    } else if (this.state.submitted === true) {

    }

    return (
      <div className="App text-center">
        <div className="App-header">
          <h2>Simple Survey</h2>
        </div>
        <div className="text-center">
          {user}
        </div>
        <div className="container">
          {questions}
        </div>
      </div>
    );
  }
}

export default App;
