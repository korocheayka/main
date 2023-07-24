import React from 'react'; 
import styles from './footer.module.css' 
const Footer = () => { 
    return ( 
        <footer> 
           <div className={styles.footer__section}> 
            <div className={styles.footer__img}> 
                <img src="https://www.1milliondance.com/static/media/logo-1-million.e5841125.svg" alt="" /> 
            </div> 
           </div>  
        </footer> 
    ); 
}; 
 
export default Footer;