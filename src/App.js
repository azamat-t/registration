import React, { Component } from 'react';
import SignUpForm from './components/SignUpForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Registration
          </p>    
          <SignUpForm />      
        </header>
        
      </div>
    );
  }
}

export default App;
