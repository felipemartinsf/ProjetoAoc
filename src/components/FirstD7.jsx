import React from 'react'
import './FirstD7.css'
function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  
  function FirstD7({ gameStage, pergunta, resp1, resp2, resp3, resp4, passFase, error1}) {
    const shuffledOptions = shuffleArray([resp1, resp2, resp3, resp4]);
  

  
    return (
      <div className="FirstD2">
        <button id='fase' onClick={passFase}>8</button>
        <h1>{pergunta}</h1>
  
        <div id="row1" className='row'>
          {shuffledOptions.slice(0, 2).map((option, index) => (
            <div key={index} className="box" onClick={() => error1()}>
              {option}
            </div>
          ))}
        </div>
  
        <div id="row2" className='row'>
          {shuffledOptions.slice(2).map((option, index) => (
            <div key={index} className="box" onClick={() => error1()}>
              {option}
            </div>
          ))}
        </div>
        <footer>UNIFESP</footer>
      </div>
    );
  }

export default FirstD7