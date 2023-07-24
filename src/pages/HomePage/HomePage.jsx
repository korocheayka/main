import React from 'react'
import styles from './homepage.module.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <section className={styles.video__section}>
        <div className={styles.video__container}>
          <video autoPlay loop muted className={styles.video__background}>
            <source src="/video/ilikeit.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className={styles.words__section}>
        <div className={styles.container}>
          <div className={styles.words__wrapper}>
            <div className={styles.words__up}>
              <h2>WE DONT NEED </h2>
            </div>
            <div className={styles.words__btw}>
              <h1>A STAGE TO DANCE</h1>
            </div>
            <div className={styles.words__down}>
              <Link to="/about">More about us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage