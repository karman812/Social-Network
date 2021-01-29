const UPDATE_PASSWORD = 'AUTH_UPDATE_PASSWORD'
const UPDATE_LOGIN = 'AUTH_UPDATE_LOGIN'
const IS_USER_LOGGED = 'AUTH_IS-USER_LOGGED'
const DESCRIPTION = 'AUTH_DESCRIPTION'


const initialState = {
    email: '',
    password: '',
    toggle: false,
    information: 'sc'
}

const authReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {

        case UPDATE_PASSWORD:
            return {
                ...state,
                password: action.password
            }
        case DESCRIPTION:
            return {
                ...state,
                information: action.information
            }
        case IS_USER_LOGGED:
            return {
                ...state,
                toggle: action.bool
            }

        case UPDATE_LOGIN:
            return {
                ...state,
                email: action.email
            }
            return stateCopy
        default:
            return state
    }
}


export const updatePassword = (password) => {
    return {
        type: UPDATE_PASSWORD,
        password: password
    }
}
export const updateLogin = (email) => {
    return {
        type: UPDATE_LOGIN,
        email: email
    }
}
export const isUserLogged = (bool) => {
    return {
        type: IS_USER_LOGGED,
        bool: bool
    }
}
export const addDescription = (information) => {
    return {
        type: DESCRIPTION,
        information: information
    }
}


export default authReducer