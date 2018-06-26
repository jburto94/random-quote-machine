import React from 'react';
import './Quote.css';

const Quote = (props) => {
  return (
    <div>
      <p id='text'>
        <i class="fas fa-quote-left"></i>
        {props.text}
      </p>
      <h3 id='author'>- {props.author}</h3>
    </div>
  );
}

export default Quote;