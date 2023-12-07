import React from 'react';
import './Error.css' // Certifique-se de importar o arquivo CSS

function Error({ text, reboot }) {
  // text explica o erro
  // reboot volta para o início e adiciona 1 na contagem
  return (
    <div className='Error'>
      <div className='error-text'>{text}</div>
      <button onClick={reboot}>Voltar</button>
    </div>
  );
}

export default Error;
