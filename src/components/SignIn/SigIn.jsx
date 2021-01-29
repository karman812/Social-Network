import React from "react";
import {Col,Row} from "react-bootstrap";
import styles from "../Login/Login.module.css";
import * as axios from "axios";
import {NavLink} from "react-router-dom";


let SignIn = (props) =>{
    let state = props.signInPage
    let onUpdatePassword = (event) => {
        let body = event.target.value
        props.updatePasswordReg(body)
    }
    let onUpdateLogin = (event) => {
        let body = event.target.value
        props.updateLoginReg(body)
    }
    let onRegistration = () =>{
        let info = null
        axios.post("http://localhost:5000/api/auth/register", {
            email: state.email,
            password: state.password
        }).then(response => {
            if (response.status == 201) {
                info = 'ok'
                props.updateToggleReg(true)
            }
        })
        props.updateDescriptionReg(info)
    }
    return(
        <Row>
            {
                state.toggle == true && <Col xs='12'>
                    <span>Вы успешно создали аккаунт. Перейдите по следующей </span>
                    <span><NavLink to='/login'>ссылке, </NavLink></span>
                    <span>чтобы зайти в него</span>
                </Col>
            }
            {
                 state.toggle == false &&<Col xs='12'>

                <Row>
                    <Col xs='12'><h1>Регистрация</h1></Col>
                    <Col xs='12'>
                        <textarea className={styles.textarea} name="" id="" placeholder='Придумайте логин'
                                  onChange={onUpdateLogin}></textarea>
                    </Col>
                    <Col xs='12'>
                        <textarea className={styles.textarea} name="" id="" placeholder='Придумайте пароль'
                                  onChange={onUpdatePassword}></textarea>
                    </Col>
                    <Col xs='12'>
                        <button onClick={onRegistration}>Создать аккаунт</button>
                    </Col>
                </Row>
            </Col>
            }

        </Row>
    )
}
export default SignIn