import React, { useState } from 'react';
import './App.css';

const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    text: "So many books, so little time.",
    author: "Frank Zappa"
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  }
];

function App() {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * quotes.length));

  const getNewQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === index);
    setIndex(newIndex);
  };

  const quote = quotes[index];
  const tweetUrl = `https://twitter.com/intent/tweet?text="${encodeURIComponent(quote.text)}" - ${encodeURIComponent(quote.author)}`;

  return (
    <div className="App">
      <div id="quote-box" className="quote-box">
        <p id="text">"{quote.text}"</p>
        <p id="author">- {quote.author}</p>
        <div className="buttons">
          <a
            id="tweet-quote"
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
          <button id="new-quote" onClick={getNewQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App; 