import React from 'react'
import styles from './feature.module.css'

export default props => {
  return (
    <div className={styles.feature}>
      <img src={props.img} className={styles.img} alt="" />
      <div className={styles.description}>
        <h2 className={styles.name}>{props.name}</h2>
        <div className={styles.excerpt}>{props.children}</div>
      </div>
    </div>
  )
}
