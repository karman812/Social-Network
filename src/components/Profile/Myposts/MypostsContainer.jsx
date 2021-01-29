import React from 'react';

import {addPostActionCreator} from "../../../redux/profile-reducer";
import Myposts from "./Myposts";

import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return{
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addPost: (newPostBody) =>{
            dispatch(addPostActionCreator(newPostBody))
        }
    }
}
let  MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)
export default MypostsContainer;