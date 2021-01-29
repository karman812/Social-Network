import React from "react";
import {Col, Row} from "react-bootstrap";
import * as axios from "axios";
import styles from './Login.module.css'
import {NavLink} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {LoginFormRedux} from "./LoginForm";

const Login = (props) => {
    let state = props.authPage
    let onUpdateLogin = (event) => {
        let body = event.target.value
        props.updateLogin(body)
    }
    let onUpdatePassword = (event) => {
        let body = event.target.value
        props.updatePassword(body)
    }
    let tryToLogIn = (event) => {
        let info = null
        axios.post("http://localhost:5000/api/auth/login", {
            email: state.email,
            password: state.password
        }).then(response => {
            if (response.status == 200) {
                info = 'ok'
                props.updateToggle(true)
            }
        })
        props.updateDescription(info)
    }
    let submitLogin = (value) =>{
        console.log(value.usePassword, value.userLogin)
        let info = null
        axios.post("http://localhost:5000/api/auth/login", {
            email: value.usePassword,
            password: value.userLogin
        }).then(response => {
            if (response.status == 200) {
                info = 'ok'
                props.updateToggle(true)
            }
        })
        props.updateDescription(info)
    }
    return (
        <Row>
            <Col xs='12'>
                <Row>
                    <Col xs='12'><h1>Вход в аккаунт</h1></Col>
                    {
                        !state.information && <Col xs='12'>
                            <span className={styles.warningText}>Данные некорректны. Попробуйте снова</span>
                        </Col>
                    }
                    {
                        state.toggle == false && <Col xs='12'>
                            <Row>
                                <LoginFormRedux onSubmit={submitLogin}/>
                                <Col xs='3' className={styles.signInButtonCol}><NavLink to='/signin'><span>Зарегистрироваться</span></NavLink></Col>
                            </Row>
                        </Col>
                    }
                    {
                        state.toggle == true && <Redirect to='/profile'/>
                    }
                </Row>
            </Col>
        </Row>
    )
}


export default Login