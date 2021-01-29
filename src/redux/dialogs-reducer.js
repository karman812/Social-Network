const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    messagesData: [{id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Im fine. What about you?"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"},],
    dialogsData: [{id: 1, name: "Vanya"},
        {id: 2, name: "Katya"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Natasha"},
        {id: 5, name: "Valera"},
        {id: 6, name: "Grisha"},]
}

 const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {



        case SEND_MESSAGE:
            let newText = action.message;
            stateCopy = {
                ...state,
                messagesData: [...state.messagesData, {id: 10, message: newText}]
            }
            return stateCopy
        default:
            return state
    }
}

export const sendMessageCreator = (message) => {

    return {
        type: SEND_MESSAGE,
        message: message
    }
}


export default dialogsReducer