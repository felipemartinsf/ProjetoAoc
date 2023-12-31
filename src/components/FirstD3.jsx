import styles from './FirstD3.module.css'
//react
import { useRef, useEffect, useState } from "react"
//data
//components



function FirstD3({ reboot, passFase }) {
  const word = 'hazard'
  const [letters, setLetters] = useState([])
  const [guesses, setGuesses] = useState(-1)
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])

  //processa a letra
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()
    //check if letter has already been utilized
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) { return; }

    //push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [...actualGuessedLetters, normalizedLetter,])

    }
    else {
      setGuesses(0)
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }
  useEffect(() => { //serve pra monitorar algum dado, alguma mudança etc (a função dentro vai ser alterada toda vez que o dado for mudado)
    if (guesses === 0) {
      // resetar todos os stages
      clearLetterStates()
      reboot()
    }
  }, [guesses]) //guesses é o dado que muda muito

  const verify = () => {
    const uniqueLetters = [... new Set(letters)] //array de letras únicas
    //win condition
    if (guessedLetters.length === uniqueLetters.length) {
      passFase();
    }
  }

  const [letter, setLetter] = useState()
  const letterInputRef = useRef(null) //com isso eu consigo selecionar um elemento DOM e fazer alguma funcao com ele

  const handleSubmit = (e) => {
    e.preventDefault()
    verifyLetter(letter)
    setLetter("")
    letterInputRef.current.focus() //foca nele
  }

  useEffect(()=>{
    let wordLetters = word.split("") // isso vai separar em letras
    wordLetters = wordLetters.map((i) => i.toLowerCase())
    //states
    setLetters(wordLetters)
    clearLetterStates()
  }, [])

  return (
    <div className="FirstD3">

      <h1>Adivinhe a palavra:</h1>
      <h2 className={styles.words}>Pipeline</h2>
    <p className={styles.p}>erro</p>
      <div className={styles.wordContainer}>
        {letters.map((letters, i) => (guessedLetters.includes(letters) ? (<span key={i} className={styles.letter}>{letters}</span>) : (<span key={i} className={styles.blankSquare}></span>)))}
      </div>
      <div className={styles.letterContainer}>
        <form onSubmit={handleSubmit}>
          <input type="text" name='letter' maxLength='1' required onChange={(e) => setLetter(e.target.value)} value={letter}
            ref={letterInputRef} />
          <button onClick={verify}> Jogar! </button>
        </form>
      </div>

    </div>
  )
}

export default FirstD3
