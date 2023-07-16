import React from 'react';
import styles from './homepage.module.css'
import ilikeit from "/video/ilikeit.mp4"

const HomePage = () => {
    return (
        <>
        <section>
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
                <source src={ilikeit}  type="video/mp4"/>
            </video>
        </section>
           
        
        </>
       

    );
};

export default HomePage;