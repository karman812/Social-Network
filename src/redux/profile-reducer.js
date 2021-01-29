import {getProfile} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = "SET-USERS-PROFILE"
const SET_USERS_STATUS = "SET-USERS-STATUS"

let initialState = {
    postData: [{id: 1, message: 'Hi, how are you?', likesCount: 45},
        {id: 2, message: "It's my first post!", likesCount: 25},],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:{
            let newPost = {id: 3, message: action.newPostBody, likesCount: 5}
            let copyState = {
                ...state,
                postData: [...state.postData, newPost],
            }
            return copyState
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USERS_STATUS: {
            return {
                ...state,
                status: action.newStatusBody
            }
        }
        default:
            return state
    }

}

export const addPostActionCreator = (newPostBody) => {
    console.log("ye")
    return {
        type: ADD_POST,
        newPostBody: newPostBody
    }
}
export const addStatusActionCreator = (newStatusBody) => {
    debugger
    return {
        type: SET_USERS_STATUS,
        newStatusBody: newStatusBody
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USERS_PROFILE,
        profile
    }
}
export const getUsersProfile = (userId) =>{
    return (dispatch) =>{
        getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export default profileReducer