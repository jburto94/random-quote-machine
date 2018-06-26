import React, {Component} from 'react';
import axios from 'axios';
import Quote from './Quote';
import QuoteButtons from './QuoteButtons';
import './QuoteBox.css';

const URL = 'https://talaikis.com/api/quotes/random/';
const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857", "#cd3333", "#5f9ea0"];

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      author: '',
      color: ''
    }
    this.getQuote = this.getQuote.bind(this);
    this.setQuote = this.setNewQuote.bind(this);
  }

  getQuote() {
    axios.get(URL)
      .then(res => this.setNewQuote(res.data))
      .catch(err => console.log(err));
  }

  setNewQuote(data) {
    this.setState({
      text: data.quote,
      author: data.author,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
  
  componentDidMount() {
    this.getQuote(URL);
  }

  render() {
    const { text, author, color } = this.state;
    const divStyle = {
      backgroundColor: `${color}`,
      color: `${color}`
    }
    return (
    <div className='container' style={divStyle}>
      <div id='quote-box'>
        <Quote author={author} text={text} color={color}/>
        <QuoteButtons click={this.getQuote} color={color}/>
      </div>
    </div>
    );
  }
}

export default QuoteBox;