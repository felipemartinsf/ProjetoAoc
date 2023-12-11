import React from 'react'
import styles from './ChoosePath.module.css'
import adress from '../image/adress.png'
import pipeline from '../image/pipeline.png'
import triangle from '../image/triangle.png'
function ChoosePath({pathEndereco,pathPipe,pathHierarquia}) {

  return (
   <div className={styles.ChoosePath}>
   <h1>Escolha em qual área quer  <span className={styles.sub}>JOGAR</span> </h1>
   <div className={styles.row}>
    <div className={styles.card} onClick={pathEndereco}>ENDEREÇAMENTO <img className={styles.images}src={adress}></img></div>
    <div className={styles.card} onClick={pathPipe}>PIPELINE <img className={styles.images} src={pipeline}></img></div>
    <div className={styles.card} onClick={pathHierarquia}>CACHE<img className={styles.images} src={triangle}></img></div>
    </div>
   </div>
  )
}

export default ChoosePath