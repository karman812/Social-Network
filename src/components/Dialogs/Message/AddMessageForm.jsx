import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import React from "react";

const maxlength20 =maxLengthCreator(20)

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} placeholder='введите сообщение' name='AddMessageBody' validate={[requiredField,maxlength20]}/>
            <button>Отправить</button>
        </form>
    )
}

export let AddMessageFormRedux =  reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)