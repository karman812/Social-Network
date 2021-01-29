import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

import SignIn from "./SigIn";
import {addDescriptionReg, updateLoginReg, updatePasswordReg, updateRegSucsessReg} from "../../redux/register-reducer";

let mapDispatchToProps = (dispatch) =>{

    return {
        updatePasswordReg: (password) =>{
            dispatch(updatePasswordReg(password))
        },
        updateLoginReg: (login) => {
            dispatch(updateLoginReg(login))
        },
        updateToggleReg: (bool) =>{
            dispatch(updateRegSucsessReg(bool))
        },
        updateDescriptionReg: (info) =>{
            dispatch(addDescriptionReg(info))
        }
    }
}
let mapStateToProps = (state) =>{
    return {
        signInPage: state.signInPage
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(SignIn);