import {Col} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import styles from "./Login.module.css";
import {Input, Textarea} from "../common/FormControls/FormControls";
import React from "react";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxlength13 = maxLengthCreator(13)

const LoginForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Col xs='12'>
                <Field className={styles.textarea} name="userLogin" id="" placeholder='Введите свою почту' component={Textarea}  validate={[maxlength13, requiredField]}/>
            </Col>
            <Col xs='12'>
                <Field className={styles.textarea} name="usePassword" id="" placeholder='Введите пароль' component={Textarea} type='password' validate={[maxlength13, requiredField]}/>
            </Col>
            <Col xs='12'>
                <Field className={styles.textarea} name="rememberMe" id="" component={Input} type={"checkbox"}/>
                <h6>Remember me</h6>
            </Col>
            <Col xs='3'>
                <button>Войти</button>
            </Col>
        </form>

    )
}
export const LoginFormRedux = reduxForm({form: 'addNewLogin'})(LoginForm)