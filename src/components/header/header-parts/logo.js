import {React } from 'react';
import styles from "./logo.module.css";
const Logo = (props) =>{
    return (
        <div class={styles.logoContainer}>
             <span class ={styles.logoText}>Cal Up</span>
        </div>
    );
}
export default Logo;