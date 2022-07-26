import React from 'react';
import styles from "./loginPart.module.css";
import Dropbox from './drob-box/dropBox';
function LoginPart(props){
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                    <img className={styles.imageStyle} src={props.imageUrl} alt="R"/>
            </div>
            <div className={styles.userDropBox}>
                    <Dropbox 
                        imageUrl= {props.imageUrl} 
                        email={props.email}
                        given_name={props.given_name}/>
            </div>
        </div>
    );
}

export default LoginPart;