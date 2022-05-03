import {React,Fragment} from 'react';
import Logo from './header-parts/logo';
import styles from "./header.module.css";


const Header = ()=>{
    return (<Fragment>
        <nav className={styles.headerContainer}>
                <div class={styles.logo}>
                    <Logo />
                </div>
        </nav>
    </Fragment>);
}

export default Header;
