import React from 'react'
import './ChoosePath.css'
function ChoosePath({pathEndereco,pathPipe,pathHierarquia}) {
  return (
   <div className='ChoosePath'>
    <div className='card'> 
    <button onClick={pathEndereco}> Endereçamento</button>
    <button onClick={pathPipe}>Pipeline</button>
    <button onClick={pathHierarquia}>Memória Cache</button>
    </div>
   </div>
  )
}

export default ChoosePath