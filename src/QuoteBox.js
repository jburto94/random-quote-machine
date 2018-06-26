import React, {Component} from 'react';
import axios from 'axios';
import Quote from './Quote';
import QuoteButtons from './QuoteButtons';
import './QuoteBox.css';

const URL = 'https://talaikis.com/api/quotes/random/';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      author: ''
    }
    this.getQuote = this.getQuote.bind(this);
    this.setQuote = this.setQuote.bind(this);
  }

  getQuote() {
    axios.get(URL)
      .then(res => this.setQuote(res.data))
      .catch(err => console.log(err));
  }

  setQuote(data) {
    this.setState({
      text: data.quote,
      author: data.author
    });
  }
  
  componentDidMount() {
    this.getQuote(URL);
  }

  render() {
    const { text, author } = this.state;
    return (
      <div id='quote-box'>
        <Quote author={author} text={text} />
        <QuoteButtons click={this.getQuote}/>
      </div>
    );
  }
}

export default QuoteBox;