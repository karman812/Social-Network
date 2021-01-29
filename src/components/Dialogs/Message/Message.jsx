import React from "react";
import styles from "./../Dialogs.module.css";
import {Col, Row} from "react-bootstrap";


const Message = (props) => {
    return (
        <Col xs='12' className={styles.message}>{props.text}</Col>
    );
}
export default Message;