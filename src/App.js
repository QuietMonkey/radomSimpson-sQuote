import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import DisplayQuote from './displayQuote'

class App extends Component {
  state = {data: []}


  getRandom = async () => {
    
    const res = await axios.get(
      'https://thesimpsonsquoteapi.glitch.me/quotes'
    )
    this.setState({data: res.data[0]})
  }
  componentDidMount() {
    this.getRandom()
  }

  





  
  // componentDidMount() {
  //   const axios = require('axios');
  // axios.get('https://randomuser.me/api?nat=fr')
  //   // .then((response)=> console.log(response.data.results[0]))
  //   .then ((response) => this.setState({data : response.data.results[0]}))

  // console.log(this.state)}
  
  render() {
    console.log(this.state.data)
    console.log(this.state.data.character)

  return (
    <div className="App">
      <DisplayQuote name={this.state.data.character} image={this.state.data.image} quote={this.state.data.quote} />
      <button onClick={this.getRandom}>Random</button>
    </div>
  );
  }
}

export default App;
