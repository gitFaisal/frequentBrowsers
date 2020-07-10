import React, { Component } from 'react';
import './App.css';
import Table from './Table/Table.js';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
      state = {
      people: [],
    };

  async componentDidMount (){
    const url = 'http://ec2-52-14-113-9.us-east-2.compute.amazonaws.com:8000/';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({people:data.reverse()});
    console.log(this.state.people.reverse())

  };

  reverseHandler = () => {
      this.setState(
        {people:this.state.people.reverse()}
      )}

  render() {
    return (
      <div className="container">
        <div className="table">
          <button className="btn btn-primary" onClick={this.reverseHandler}>Highest/Lowest of Top 1</button>
          <nav>
          <h1>Frequent Browsers</h1>
          </nav>
          <Table person={this.state.people} click={this.reverseHandler}/>
        </div>
      </div>

  );
}
}

export default App;
