import React from 'react';
import styles from './Header.module.css'
import {Row, Col} from 'react-bootstrap';
import karmanLogo from './../../assets/images/karman2.png'
import karmanLogoText from './../../assets/images/karman_text.png'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <Row className={styles.header_row}>
            <Col xs='7' className='header'>
                <img className={styles.main_logo} src={karmanLogo}></img>
                <img className={styles.header_text_logo} src={karmanLogoText}></img>
            </Col>
            <Col xs='2' className={styles.loginCol}>
                <NavLink to='/login'>Login</NavLink>
            </Col>
        </Row>
    );
}
export default Header;

