
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
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
};

const dialogsReducer = (state=initialState,action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages:[...state.messages, {id:5, message:action.newMessageBody}],
            }
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE,newMessageBody})

export default dialogsReducer;