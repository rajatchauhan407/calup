import {React,Fragment} from 'react';
import Logo from './header-parts/logo';
import MidNav from './header-parts/midnav';
import styles from "./header.module.css";


const Header = ()=>{
    return (<Fragment>
        <nav className={styles.headerContainer}>
                <div class={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.midNav}>
                <MidNav />
                </div>
        </nav>
    </Fragment>);
}

export default Header;
