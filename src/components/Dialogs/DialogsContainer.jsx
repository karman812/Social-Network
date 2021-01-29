import React from "react";
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapDispatchToProps = (dispatch) =>{

    return {
        sendMessage: (message) =>{
            dispatch(sendMessageCreator(message))
        }
    }
}
let mapStateToProps = (state) =>{
    return {
        messagesPage: state.messagesPage,
        isAuth: state.authPage.toggle
    }
}
let isAuthDialogs = withAuthRedirect(Dialogs)

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(isAuthDialogs);