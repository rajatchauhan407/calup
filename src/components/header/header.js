import {React,Fragment,useContext, useState} from 'react';
import Logo from './header-parts/logo';
import MidNav from './header-parts/midnav';
import LoginPart from './header-parts/login-section/loginPart';
import styles from "./header.module.css";
import AuthContext from "../../store/auth-context-new";
import MenuIcon from '@mui/icons-material/Menu';
import SideNav from './header-parts/side-nav/sideNav';
const Header = ()=>{
    const authCtx = useContext(AuthContext);
    const [showDrawer, setShowDrawer] = useState(false);

  const showDrawerHandler = () => {
              setShowDrawer((showDrawer=>{
                  showDrawer = !showDrawer;
                  return showDrawer;
              }));
  }

    return (<Fragment>
        <SideNav
            visible={showDrawer}
        />
        <nav className={styles.headerContainer}>
            <div 
                className={styles.menuIcon}>
                    <MenuIcon 
                    style={{
                        fontSize: '26px',
                        width:'100%'
                    }}
                    onClick={showDrawerHandler}
                    />
            {/* <MenuOutlined
                style={{
                    fontSize: '26px',
                    width:'100%'
                }}
            /> */}
            </div>
            
                <div className={styles.logo}>
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
