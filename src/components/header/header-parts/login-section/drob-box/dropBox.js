import React,{useContext} from 'react';
import SuccessBtn from '../../../../buttons/success';
import styles from './dropBox.module.css';
import AuthContext from '../../../../../store/auth-context-new';

function Dropbox(props) {
    const authCtx = useContext(AuthContext);
   const logoutHandler = ()=>{
        authCtx.onLogout();
   }
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
            <div>
                <SuccessBtn 
                text="logout"
                onClick = {logoutHandler}
                />
            </div>
        </div>
    )
}
export default Dropbox;