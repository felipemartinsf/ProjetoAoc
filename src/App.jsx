import React, { useState, useEffect } from 'react';
import './App.css';
import Start from './components/Start';
import First1 from './components/First1';
import FirstD1 from './components/FirstD1';
import FirstD2 from './components/FirstD2';
import FirstD3 from './components/FirstD3';
import FirstD4 from './components/FirstD4';
import ChoosePath from './components/ChoosePath';
import Error from './components/Error';
import FirstD6 from './components/FirstD6';
import FirstD7 from './components/FirstD7';

function App() {
  //perguntas e respostas
  const data = [
    { pergunta: 'Qual o modo de endereçamento requer apenas uma referência de memória para acessar o operando?', resp1: 'Imediato', resp2: 'Indireto', resp3: 'Pilha e Registrador', respcorreta: 'Direto' },
    { text: 'Está errado, porque o imediato não acessa a memória' },
    { text: 'Está errado, pois são necessários dois acessos a memória no indireto' },
    { text: 'Está errado, pois aqui se contem o endereço do registrador' },
    { pergunta: 'A operação lw é qual tipo de operação?', resp1: 'R', resp2: 'K', resp3: 'J', respcorreta: 'T' },
    { text: 'Não é esse tipo de operação.' },
    { text: 'Não é esse tipo de operação.' },
    { text: 'Não é esse tipo de operação.' },
    { pergunta: 'O que é endereçamento relativo?', resp1: 'Acesso direto à posição de memória física.', resp2: 'Utilização de endereços fixos para armazenamento.', resp3: 'Método de acesso exclusivo a memória principal.', respcorreta: 'Acesso a posições de memória em relação a um ponto de referência.' },
    { text: 'O endereçamento relativo não envolve acesso direto à posição física da memória.' },
    { text: 'O endereçamento relativo não utiliza endereços fixos, pois eles são determinados em relação a um ponto de referência dinâmico.' },
    { text: 'O endereçamento relativo não é exclusivo para a memória principal, pode ser aplicado em vários contextos de memória.' },
    { pergunta: 'Em sistemas de 32 bits, quantos bytes são necessários para representar um endereço de memória?', resp1: '2', resp2: '32', resp3: '64', respcorreta: '6' },
    { text: 'Está errado' },
    { text: 'Está errado' },
    { text: 'Está errado' },
    { pergunta: 'Qual é a diferença entre endereçamento absoluto e relativo ?', resp1: 'O endereçamento absoluto usa endereços fixos, enquanto o relativo usa endereços dinâmicos.', resp2: 'O endereçamento relativo é exclusivo para sistemas operacionais Unix.', resp3: 'O endereçamento absoluto é mais eficiente em termos de espaço de armazenamento.', respcorreta: 'O endereçamento relativo usa posições de memória em relação a um ponto de referência, enquanto o absoluto usa endereços fixos.' },
    { text: 'O endereçamento absoluto usa endereços fixos, enquanto o relativo usa posições em relação a um ponto de referência.' },
    { text: 'A eficiência em termos de espaço de armazenamento não é a principal distinção entre esses dois tipos de endereçamento.' },
    { text: ' O endereçamento relativo não é exclusivo para sistemas operacionais Unix; pode ser usado em diferentes sistemas.' },
    { pergunta: 'O que é um pipeline em arquitetura de computadores?', resp1: 'Um componente de armazenamento temporário.', resp2: 'Um tipo de memória cache', resp3: 'Uma unidade de controle central.', respcorreta: 'Uma sequência de estágios de processamento' },
    { text: ' Um pipeline não é um componente de armazenamento temporário, mas uma sequência de estágios de processamento.' },
    { text: 'Um pipeline não é uma memória cache, mas sim um conceito relacionado à execução eficiente de instruções.' },
    { text: 'Um pipeline não é uma unidade de controle central, mas sim uma abordagem para melhorar o desempenho do processamento de instruções.' },
    { pergunta: 'O que é o estágio "Execução" em um pipeline de instruções?', resp1: 'Decodificação das instruções', resp2: 'Busca da próxima instrução.', resp3: 'Transferência de dados entre registradores', respcorreta: 'Execução efetiva das operações da instrução.' },
    { text: ' A decodificação geralmente é um estágio separado, não o estágio de execução.' },
    { text: ' A busca da próxima instrução geralmente ocorre em um estágio diferente, não durante a execução.' },
    { text: 'A transferência de dados entre registradores é uma operação diferente que pode ocorrer em outros estágios, não no estágio de execução.' },
    { pergunta: 'Qual desses não é um ponto negativo do pipeline?', resp1: ' Conflito de dados ', resp2: 'Conflito estrutural', resp3: 'Conflito de controle', respcorreta: 'Conflito de instrução' },
    { text: 'Conflitos de dados ocorrem quando uma instrução depende de outra que ainda não foi completamente processada.' },
    { text: 'Conflitos estruturais ocorrem quando mais de uma instrução requerem acesso a um mesmo componente simultaneamente.' },
    { text: 'Conflitos de controle ocorrem quando temos instruções de desvio.' },
    { pergunta: 'Qual é o objetivo principal do uso de pipelines em CPUs?', resp1: 'Reduzir o consumo de energia', resp2: 'Aumentar a complexidade do processamento.', resp3: 'Melhorar a capacidade de armazenamento.', respcorreta: 'Executar várias instruções simultaneamente.' },
    { text: ' O objetivo principal dos pipelines não é reduzir o consumo de energia, mas melhorar o desempenho e a eficiência do processamento de instruções.' },
    { text: 'Embora os pipelines introduzam alguma complexidade, seu principal objetivo não é aumentar a complexidade, mas melhorar a eficiência.' },
    { text: 'Os pipelines não têm como objetivo melhorar a capacidade de armazenamento, mas sim otimizar a execução de instruções.' },
    { pergunta: 'Quais são as fases típicas de um pipeline em arquitetura de computadores?', resp1: 'Controle, Leitura, Escrita, Execução, Memória', resp2: 'Entrada, Processamento, Saída, Armazenamento, Controle', resp3: 'Previsão, Renomeação, Leitura, Escrita de Resultados, Execução', respcorreta: ' Busca de Instrução, Decodificação de Instrução, Execução, Busca de Operandos, Escrita de Resultados' },
    { text: 'Esta opção não reflete as fases padrão de um pipeline em arquitetura de computadores.' },
    { text: 'As fases mencionadas (Entrada, Processamento, Saída, Armazenamento, Controle) não representam as etapas de um pipeline em arquitetura de computadores, mas parecem mais relacionadas a um sistema de computação em geral.' },
    { text: 'Pipelines e caches são conceitos distintos. Os pipelines melhoram o processamento de instruções, enquanto os caches melhoram o acesso à memória. Eliminar a necessidade de caches não é um objetivo dos pipelines.' },
    { pergunta: 'Qual é a função principal da memória cache em um computador?', resp1: ' Armazenar permanentemente todos os dados do sistema ', resp2: 'Gerenciar a comunicação entre o processador e periféricos', resp3: 'Aumentar a capacidade de armazenamento do disco rígido.', respcorreta: 'Agilizar o acesso à memória principal.' },
    { text: 'Essa função é de formas de memórias não volateis, como o disco rígido ou SSD.' },
    { text: 'Essa função é do módulo de entrada e saída.' },
    { text: 'A memória cache não armazena dados de forma permanente, assim não expandido a capacidade de armazenamento total do disco rígido' },
    { pergunta: 'Qual é o propósito da política de escrita write-back em sistemas de memória cache?', resp1: 'Minimizar a latência de acesso à memória cache.', resp2: 'Reduzir a quantidade de dados na memória principal.', resp3: 'Escrever na memória cache e na memória principal simultaneamente', respcorreta: "Adiar a escrita na memória principal até que seja necessário, otimizando a performance."},
    { text: 'Essa politica de escrita não tem inlfuência sobre a latência de acesso à memória cache' },
    { text: 'A quantidade de dados na memória principal não é influenciada pelo write-back.' },
    { text: 'A política de escrita que funciona dessa maneira é o write-through' },
    { pergunta: 'Qual desses não é um algoritmo de substituição de blocos?', resp1: ' LFU', resp2: 'LRU', resp3: 'FIFO', respcorreta: 'OPT' },
    { text: 'LFU ou Least Frequently Used é um algoritmo que substitui o bloco baseado na quantidade de vezes que ele foi requerido, ou seja, o bloco menos utilizado será substituido' },
    { text: 'LRU ou Least Recently Used é um algoritmo que substitui o bloco baseado no quão recentemente ele foi requerido, ou seja, o bloco a mais tempo na memória sem ser usado será o removido' },
    { text: ' FIFO ou First in First Out é um algoritmo de substituição baseado no tempo em que o bloco se encontra na memória, substituindo o mais antigo.' },
    { pergunta: 'Quando temos uma memória cache virtual, onde ela esta localizada?', resp1: 'Processador', resp2: 'MMU ', resp3: 'Memória principal', respcorreta: 'Memória Cache' },
    { text: 'Ela não está dentro desse componente ' },
    { text: 'Ela não está dentro desse componente' },
    { text: 'Ela não está dentro desse componente' },
    { pergunta: 'No mapeamento direto, quantos bits de endereço ocupa a tag?', resp1: '14', resp2: '2 ', resp3: '24', respcorreta: '6' },
    { text: 'O identificador de linhas ocupa 14 bits.' },
    { text: 'O identificador de palavra ocupa 2 bits.' },
    { text: 'O endereço completo ocupa 24 bits.' },

  ]
  const [tries, setTries] = useState(0);
  const [gameStage, setGameStage] = useState(-2);
  const [pergunta, setPergunta] = useState('');
  const [resp1, setResp1] = useState('');
  const [resp2, setResp2] = useState('');
  const [resp3, setResp3] = useState('');
  const [resp4, setResp4] = useState('');
  const [error, setError] = useState('errou');
  const [fase, setFase] = useState(0);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [showCongratulationsMessage, setShowCongratulationsMessage] = useState(false);
  const [countPipe, setCountPipe] = useState(0);
  const [countAdress, setCountAdress] = useState(0);
  const [countHash, setCountHash] = useState(0);

  useEffect(() => {
    const totalFases = data.length / 4;
  
    if (fase === totalFases) {
      setShowCongratulations(true);
    } else if (gameStage >= 0) {
      setPergunta(data[gameStage].pergunta);
      setResp1(data[gameStage].resp1);
      setResp2(data[gameStage].resp2);
      setResp3(data[gameStage].resp3);
      setResp4(data[gameStage].respcorreta);
    }
  }, [gameStage, data, fase]);
  useEffect(() => {
    if (gameStage % 4 !== 0 && gameStage > 0) {
      //cai na mensagem de erro
      setError(data[gameStage].text);
      setShowCongratulationsMessage(false);
    }
  }, [gameStage, data]);

  const pathEndereco = () => {
    
    setGameStage(0)
    setShowCongratulationsMessage(false);
  };


  const pathPipe = () => {
    
    setGameStage(20);
    if (fase == 3) {
      setShowCongratulationsMessage(false);
    }
  };

  const pathHierarquia = () => {
    
    setGameStage(40);
    setShowCongratulationsMessage(false);
  };

  const passFase = () => {
    setFase((prevFase) => prevFase + 1);
    setGameStage((prevGameStage) => prevGameStage + 4);
    
  };

  const reboot = () => {
    setShowCongratulationsMessage(false); // Esconder a mensagem de parabéns ao voltar para o início
    setShowCongratulations(false);
    setGameStage(-2);
    setTries(tries + 1);
    setFase(0)
  };

  const choose = () => {
    setGameStage(-1);
  };

  const error1 = () => {
    if(gameStage<20){
      setCountAdress((prevCountAdress) => prevCountAdress + 1);
      console.log(countAdress)
    }
    else if(gameStage>=20 && gameStage<40){
      setCountPipe((prevCountPipe) => prevCountPipe + 1);
      console.log(countPipe)
    }
    else{
      setCountHash((prevCountHash)=> prevCountHash +1)
      console.log(countHash)
    }
    setGameStage((prevGameStage) => prevGameStage + 1);
  };

  const error2 = () => {
    if(gameStage<20){
      setCountAdress((prevCountAdress) => prevCountAdress + 1);
      console.log(countAdress)
    }
    else if(gameStage>=20 && gameStage<40){
      setCountPipe((prevCountPipe) => prevCountPipe + 1);
      console.log(countPipe)
    }
    else{
      setCountHash((prevCountHash)=> prevCountHash +1)
      console.log(countHash)
    }
    setGameStage((prevGameStage) => prevGameStage + 2);
  };

  const error3 = () => {
    if(gameStage<20){
      setCountAdress((prevCountAdress) => prevCountAdress + 1);
      console.log(countAdress)
    }
    else if(gameStage>=20 && gameStage<40){
      setCountPipe((prevCountPipe) => prevCountPipe + 1);
      console.log(countPipe)
    }
    else{
      setCountHash((prevCountHash)=> prevCountHash +1)
      console.log(countHash)
    }
    setGameStage((prevGameStage) => prevGameStage + 3);
  };

  const control = () =>{
  const counts = [countAdress, countHash, countPipe]
  counts.sort()
  if(counts[2]===countPipe){
    return 'pipeline'
  }
  else if(counts[2]===countHash){
    return 'hash'
  }
  else if (counts[2] === countAdress){
    return 'adress'
  }
  }

  const controlLink = () =>{
    if(control() === 'adress'){
      return <a href='unifesp.br'>Adress</a>
    }
    else if(control() === 'pipeline'){
      return <a href='facebook.com'> Pipeline</a>
    }
    else{
      return <a>Hash</a>
    }
  }
  return (
    <div className="App">
      {gameStage === -2 && <Start tries={tries} pathing={choose} />}
      {gameStage === -1 && (
        <ChoosePath
          pathEndereco={pathEndereco}
          pathPipe={pathPipe}
          pathHierarquia={pathHierarquia}
        ></ChoosePath>
      )}
      {gameStage % 4 === 0 && gameStage !== 4 && gameStage !== 12 && gameStage !==20 && gameStage!==48 &&  gameStage!==52 && gameStage!==56 && !showCongratulations &&  (
        <First1
          gameStage={fase}
          pergunta={pergunta}
          resp1={resp1}
          resp2={resp2}
          resp3={resp3}
          resp4={resp4}
          passFase={passFase}
          error1={error1}
          error2={error2}
          error3={error3}
        ></First1>
      )}
      {gameStage === 4 && !showCongratulations && <FirstD1
        gameStage={fase}
        pergunta={pergunta}
        resp1={resp1}
        resp2={resp2}
        resp3={resp3}
        resp4={resp4}
        passFase={passFase}
        error1={error1}
        error2={error2}
        error3={error3}></FirstD1>}


      {gameStage === 12 && !showCongratulations && <FirstD2
        gameStage={fase}
        pergunta={pergunta}
        resp1={resp1}
        resp2={resp2}
        resp3={resp3}
        resp4={resp4}
        passFase={passFase}
        error1={error1}
        error2={error2}
        error3={error3}></FirstD2>}
      {gameStage === 20 && !showCongratulations && <FirstD3
        reboot={reboot} passFase={passFase}></FirstD3>}
        
        {gameStage === 48 && !showCongratulations && <FirstD4
          gameStage={fase}
          pergunta={pergunta}
          resp1={resp1}
          resp2={resp2}
          resp3={resp3}
          resp4={resp4}
          passFase={passFase}
          error1={error1}
          error2={error2}
          error3={error3}></FirstD4>}

          {gameStage === 52 && !showCongratulations && <FirstD6 passFase={passFase} reboot={reboot}></FirstD6>}
          {gameStage === 56 && !showCongratulations && <FirstD7  gameStage={fase}
          pergunta={pergunta}
          resp1={resp1}
          resp2={resp2}
          resp3={resp3}
          resp4={resp4}
          passFase={passFase}
          error1={error1}
          error2={error2}
          error3={error3}></FirstD7>}

      {showCongratulations && (
        <div>
          <h2>Parabéns! Você respondeu todas as perguntas corretamente.</h2>
          <p> Você errou mais em {control()}, segue link para aprender mais sobre: {controlLink()}</p>
          <button onClick={reboot}>Voltar para o início</button>
        </div>
      )}

      {gameStage % 4 !== 0 && gameStage > 0 && (
        <Error text={error} reboot={reboot}>
          {' '}
        </Error>
      )}

    </div>
  );
}


export default App;