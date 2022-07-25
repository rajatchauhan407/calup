import {React} from "react";
import { NavLink } from "react-router-dom";
import styles from "./midnav.module.css";
const MidNav = ()=>{
    return (
        <div className="main-nav">
            <ul className={styles.navList}>
                <li><NavLink activeClassName={styles.active} to="/home">Home</NavLink></li>
                <li><NavLink activeClassName={styles.active} to="/multiply">Multiply</NavLink></li>
                <li><NavLink activeClassName={styles.active} to="/divide">Divide</NavLink></li>
                <li><NavLink activeClassName={styles.active} to="/add">Add</NavLink></li>
                <li><NavLink activeClassName={styles.active} to="/subtract">Subtract</NavLink></li>
            </ul>
        </div>
    );
}

export default MidNav;
