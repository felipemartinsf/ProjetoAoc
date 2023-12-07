
import './First1.css';
import {useState,useEffect} from 'react'

//função para embaralhar as divs

function FirstD4({ gameStage, pergunta, resp1, resp2, resp3, resp4, passFase, error1, error2, error3 }) {


  
  const [buttonPosition, setButtonPosition] = useState(getRandomPosition());
  const [buttonVisible, setButtonVisible] = useState(true);

  function getRandomPosition() {
    const maxX = window.innerWidth - 100; // Width of the button
    const maxY = window.innerHeight - 100; // Height of the button

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    return { x: randomX, y: randomY };
  }
  const [valor, setValor] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setValor((prevValor) => prevValor + 1);
    }, 800);

    // Limpando o intervalo quando o componente é desmontado
    return () => clearInterval(intervalo);
  }, []); // O segundo argumento do useEffect é uma lista de dependências vazia para garantir que o efeito só seja executado uma vez


  useEffect(()=>{
    moveButton()
  },[valor])
  const moveButton = () => {
    setButtonVisible(true);
    setButtonPosition(getRandomPosition());
  };

  const increaseScore = () => {
    if (buttonVisible) {
      passFase()
    }
  };
  return (
    <div className="FirstD4">
      <button id='fase'>{gameStage + 1}</button>
      <h1>{pergunta}</h1>

      <div id="row1" className='row'>
      <div className='box' onClick={error1}>{resp1}</div>
      <div className='box' onClick={error2}>{resp2}</div>
      
      </div>

      <div id="row2" className='row'>
      <div className='box' onClick={error3}>{resp3}</div>
      <div className='box' onClick={error1}>{resp4}</div>
      </div>
      <button id='gameButton'  onClick={increaseScore} style={{   position: 'absolute',
      left: buttonPosition.x,
      top: buttonPosition.y}}>FAFO</button>
      <footer>UNIFESP</footer>
    </div>
  );
}

export default FirstD4;