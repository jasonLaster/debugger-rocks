import React from 'react'
import styles from './feature.module.css'

export default props => {
  const excerpt = Array.isArray(props.excerpt) ? (
    props.excerpt.map(e => <p>{e}</p>)
  ) : (
    <p>{props.excerpt}</p>
  )
  console.log(excerpt)
  return (
    <div className={styles.feature}>
      <img src={props.img} className={styles.img} alt="" />
      <div className={styles.description}>
        <h2 className={styles.name}>{props.name}</h2>
        <div className={styles.excerpt}>{excerpt}</div>
      </div>
    </div>
  )
}
