import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";

let maxLengthStatus = maxLengthCreator(15)
const ProfileStatus = (props) =>{


    let [editMode, setEditMode] = useState(false)
    const activateEditMode = () =>{
        debugger
        setEditMode(true)
    }
    const deActivateEditMode = (value) =>{
        setEditMode(false)
        debugger
        console.log(value.NewStatusBody)
        props.addStatus(value.NewStatusBody)
    }

        return(
            <Col xs='6'>
                <h1>{props.fullName}</h1>
                {props.contacts.twitter && <div><span>Contacts: </span><div><a href={props.contacts.twitter}>twitter</a></div></div>}
                <span>Статус: </span>
                <AddStatusReduxForm onSubmit={deActivateEditMode} onDoubleClick={activateEditMode} onBlur={deActivateEditMode}/>
            </Col>
        )
    }
const addStatusForm = (props) =>{
    return(
        <form onBlur={props.handleSubmit}>
            <Field component={Textarea} placeholder={'Введите свой статус'} name={'NewStatusBody'} validate={[requiredField,maxLengthStatus]}/>
        </form>
    )
}
const  AddStatusReduxForm = reduxForm({form: 'newStatusReduxForm'})(addStatusForm)

export default ProfileStatus
