const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const UPDATE_LOGIN = 'UPDATE_LOGIN'
const IS_REG_SUCSESS = 'IS-REG-SUCSESS '
const DESCRIPTION = 'DESCRIPTION'


const initialState = {
    email: '',
    password: '',
    toggle: false,
    inform: 'sc'
}

const registerReducer = (state = initialState, action) => {

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
                inform: action.inform
            }
        case IS_REG_SUCSESS:
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

export const updatePasswordReg = (password) => {
    return {
        type: UPDATE_PASSWORD,
        password: password
    }
}
export const updateLoginReg = (email) => {
    return {
        type: UPDATE_LOGIN,
        email: email
    }
}
export const updateRegSucsessReg = (bool) => {
    return {
        type: IS_REG_SUCSESS,
        bool: bool
    }
}
export const addDescriptionReg = (inform) => {
    return {
        type: DESCRIPTION,
        inform: inform
    }
}


export default registerReducer