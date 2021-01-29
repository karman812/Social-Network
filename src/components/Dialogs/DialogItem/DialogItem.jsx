import React from "react";
import styles from "./../Dialogs.module.css";
import {Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <Row>
            <Col xs='12' className={styles.dialog}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></Col>
        </Row>
    )
}
export default DialogItem;