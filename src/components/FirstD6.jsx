import React from 'react'
import './FirstD6.css'
function FirstD6({passFase,reboot}) {
  return (
<div className="FirstD6">

    <div className="title">Onde se encontra a memória cache?</div>
    <div className="square" onClick={reboot}>CPU</div>
    <div className="square" onClick={passFase}>CACHE</div>
    <div className="square" id='memory'onClick={reboot}>MEMORIA</div>
   
</div>
  )
}

export default FirstD6