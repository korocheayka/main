import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css'


const Header = () => {
    return (
        <header style={{ position: 'absolute', top: '-10px', zIndex: 999 }}>
          

           <nav>
                <ul>
                    <li className={styles.home__li}>
                        <Link to="/">DANCE STUDIO</Link>
                    </li>

                    <li className={styles.instructors__li}>
                        <Link to="/instructors">INSTRUCTORS</Link>
                    </li>


                    <li className={styles.create__li}>
                        <Link to="/register">REGISTER</Link>
                      
                    </li>
                    <li  className={styles.create__li2}>
                    <Link to="/login">LOGIN</Link>
                    </li>

                </ul>
            

            </nav>

           
          
        </header>
    );
};

export default Header;