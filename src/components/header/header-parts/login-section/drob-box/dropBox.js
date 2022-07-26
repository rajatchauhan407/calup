import React from 'react';
import styles from './dropBox.module.css';
function Dropbox(props) {
   
    return (
        <div className={styles.dropBox}>
            <div className={styles.userCard}>
                <div className={styles.imageContainer}>
                    <img className={styles.imageStyle} src={props.imageUrl} alt="R"/>
                </div>
                <div className={styles.emailContainer}>
                    <p>{props.email}</p>
                </div>
            </div>    
        </div>
    )
}
export default Dropbox;