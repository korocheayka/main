import React from 'react';
import styles from './homepage.module.css'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
        <section className={styles.video__section}>
            <div className={styles.container}>
            <video
            autoPlay
            loop
            muted
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                left: "50%",
                top: "50%",
                objectFit: "cover",
                transform: "translate(-50% , -50%)",
                zIndex: "-1"
            }}
            >
                <source src="/video/ilikeit.mp4"  type="video/mp4"/>
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
                        <Link to="/more">More about us</Link>

                    </div>


                </div>
                
            </div>
           


            </section>

        </>
       

    );
};

export default HomePage;
           