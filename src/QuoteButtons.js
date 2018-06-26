import React from 'react';
import './QuoteButtons.css';

const QuoteButtons = (props) => {
  return (
    <div id='buttons'>
      <a href={`twitter.com/intent/tweet/`} id='tweet-quote' style={{backgroundColor: `${props.color}`}}>
        <i className="fab fa-twitter"></i>
      </a>
      <button id='new-quote' onClick={props.click} style={{backgroundColor: `${props.color}`}}>New Quote</button>
    </div>
  )
}

export default QuoteButtons;