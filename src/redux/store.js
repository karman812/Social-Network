import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [{id: 1, message: 'Hi, how are you?', likesCount: 45},
                {id: 2, message: "It's my first post!", likesCount: 25},],
            newPostText: 'Write new post'
        },
        messagesPage: {
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
                {id: 6, name: "Grisha"},],
            newMessageBody: 'ddd'
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('kot')
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)


    }
}





export default store;
window.store = store;