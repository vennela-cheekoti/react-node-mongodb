import React from 'react';
import './App.css';
import Adduser from './components/Adduser'
import Getuser from './components/Getuser'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Adduser/>
        <Getuser/>
      </div>
    );
  } 
}

export default App;
