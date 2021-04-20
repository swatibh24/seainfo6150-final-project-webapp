import React from 'react'
import styles from "./Error.module.css"

const Error = () => {
    return (
    <div className={styles.error}>
      <section className={styles.errorMessage}>
        <p>It seems that something went wrong :(</p>
        <img src="https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?w=845&ssl=1" alt="error" />
      </section>
    </div>
    )
}

export default Error
