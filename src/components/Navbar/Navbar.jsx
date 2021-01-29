import React from 'react';
import styles from './Navbar.module.css'
import {Col} from 'react-bootstrap';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <Col xs='2' className={styles.nav_items_col}>
            <ul className={styles.nav_ul}>
                <li><NavLink to='/profile' className={styles.nav_item} activeClassName={styles.nav_item_active}>Profile</NavLink></li>
                <li><NavLink to='/dialogs' className={styles.nav_item} activeClassName={styles.nav_item_active}>Messages</NavLink></li>
                <li><NavLink to='/users' className={styles.nav_item} activeClassName={styles.nav_item_active}>Users</NavLink></li>
                <li><NavLink to='#1' className={styles.nav_item} activeClassName={styles.nav_item_active}>News</NavLink></li>
                <li><NavLink to='#1' className={styles.nav_item} activeClassName={styles.nav_item_active}>Settings</NavLink></li>
                <li><NavLink to='#1' className={styles.nav_item} activeClassName={styles.nav_item_active}>Music</NavLink></li>
            </ul>
        </Col>
    )
}
export default Navbar;