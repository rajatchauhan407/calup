import {React } from 'react';
import styles from "./logo.module.css";
const Logo = (props) =>{
    return (
        <div className={styles.logoContainer}>
             <span className ={styles.logoText}>Cal Up</span>
        </div>
    );
}
export default Logo;