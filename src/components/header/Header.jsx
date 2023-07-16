import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css'


const Header = () => {
    return (
        <header>
           
            <nav>
                <ul>
                    <li className={styles.home__li}>
                        <Link to="/">Dance Studio</Link>
                    </li>

                    <li className={styles.instructors__li}>
                        <Link to="/about">Instructors</Link>
                    </li>


                    <li className={styles.create__li}>
                        <Link to="/register">Register</Link>
                      
                    </li>
                    <li  className={styles.create__li2}>
                    <Link to="/login">Login</Link>
                    </li>

                </ul>
            
                {/* <video
            autoPlay
            loop
            muted
            >
                <source src={ilikeit.mp4}  type="video/mp4"/>
            </video> */}


            </nav>
        </header>
    );
};

export default Header;