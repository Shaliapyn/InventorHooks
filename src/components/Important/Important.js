import React, { useContext } from 'react'

import { ImportantContext } from '../../Contexts/ImportantContext'
import styles from './Important.module.css'

const Important = () => {
    const {setImportant} = useContext(ImportantContext)

  return (
    <div className={styles.blockImportant}>
        <h2>Go and play some video games</h2>
        <button className={styles.impBtn} onClick={()=> setImportant(false)}>Change Important</button> 
    </div>
    
  )
}

export default Important