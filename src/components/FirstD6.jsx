import React from 'react'
import './FirstD6.css'
import a from '../image/cache.png'
function FirstD6({passFase,reboot}) {

  const handleClick = (event) => {
    // Obtém as coordenadas do clique
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    // Define as coordenadas da área clicável (ajuste conforme necessário)
    const areaClicavel = {
      xMin: 150,
      xMax: 200,
      yMin: 50,
      yMax: 150,
    };

    // Verifica se o clique ocorreu na área desejada
    if (x >= areaClicavel.xMin && x <= areaClicavel.xMax && y >= areaClicavel.yMin && y <= areaClicavel.yMax) {
      // Chame a função desejada
      passFase()
    }
    else{
      reboot()
    }
  };


  return (
<div className="FirstD6">

    <div className="title" style={{color:'white', fontWeight:'bold', fontSize:'2rem'}}>Onde se encontra a memória <span style={{color:'gold'}}>CACHE</span> vítima?</div>
    <img src={a} style={{cursor:'pointer'}} onClick={handleClick}></img>
   
</div>
  )
}

export default FirstD6