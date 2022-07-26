import {React,Fragment,useContext} from 'react';
import Logo from './header-parts/logo';
import MidNav from './header-parts/midnav';
import LoginPart from './header-parts/login-section/loginPart';
import styles from "./header.module.css";
import AuthContext from "../../store/auth-context-new";

const Header = ()=>{
    const authCtx = useContext(AuthContext);

    return (<Fragment>
        <nav className={styles.headerContainer}>
                <div class={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.midNav}>
                <MidNav />
                </div>
                <div className={styles.rightNav}>
                <LoginPart 
                    imageUrl={authCtx.imageUrl} 
                    email={authCtx.email}
                    given_name={authCtx.given_name}/>
                </div>
        </nav>
    </Fragment>);
}

export default Header;
