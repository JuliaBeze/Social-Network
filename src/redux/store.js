import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";
import dialogsReducer from "./dialogs_reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi,how are you?', likesCount: 5},
                {id: 2, message: 'It`s my first project', likesCount: 3},
                {id: 2, message: 'It`s my first project', likesCount: 3}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dmitry'},
                {id: 2, name: 'Sacha'},
                {id: 3, name: 'Valera'},
                {id: 4, name: 'Victor'},
                {id: 5, name: 'Svetlana'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your study'},
                {id: 3, message: 'Bye'},
                {id: 4, message: 'Bye'},
                {id: 4, message: 'Bye'}
            ],
            newMessageBody: ""
        },
        sidebar: {
            friends: [
                {name: 'Dmitry' + ' '},
                {name: 'Sacha' + ' '},
                {name: 'Sveta' + ' '},
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}





export default store;
window.state = store;