 import React from "react";
 import Login from "./Login";
 import {compose} from "redux";
 import {connect} from "react-redux";
 import {withAuthRedirect} from "../../hoc/withAuthRedirect";
 import {addDescription, isUserLogged, updateLogin, updatePassword} from "../../redux/auth-reducer";

 let mapDispatchToProps = (dispatch) =>{

     return {
         updatePassword: (password) =>{
             dispatch(updatePassword(password))
         },
         updateLogin: (login) => {
             dispatch(updateLogin(login))
         },
         updateToggle: (bool) =>{
           dispatch(isUserLogged(bool))
         },
         updateDescription: (info) =>{
             dispatch(addDescription(info))
         }
     }
 }
 let mapStateToProps = (state) =>{
     return {
         authPage: state.authPage
     }
 }

 export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Login);