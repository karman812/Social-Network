import React from "react";
import styles from "./Dialogs.module.css";
import {Col, Row} from "react-bootstrap";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AddMessageFormRedux} from "./Message/AddMessageForm";


const Dialogs = (props) => {
    let state = props.messagesPage

    let DialogsElements = props.messagesPage.dialogsData.map(el => {
        return (
            <DialogItem name={el.name} key={el.id} id={el.id}/>
        )
    })
    let MessagesElements = state.messagesData.map(el => {
        return (
            <Message text={el.message} key={el.id} id={el.id}/>
        )
    })

    let addNewMessage = (value) =>{
        props.sendMessage(value.AddMessageBody)
    }
    return (
        <Row>
            <Col xs='12' className={styles.dialogs}>
                <Row>
                    <Col xs='4' className={styles.dialogItems}>
                        <Row>
                            <Col xs='12' className={styles.dialog + ' ' + styles.active}>
                                {DialogsElements}
                            </Col>
                        </Row>
                    </Col>
                    <Col xs='8' className={styles.messages}>
                        <Row>
                            <Col xs='12'>
                                {MessagesElements}
                            </Col>
                        </Row>
                        <Row>

                            <Col xs='12' className={styles.send_message_col}>
                                <AddMessageFormRedux onSubmit={addNewMessage}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Dialogs;