const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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
    newMessageBody: ""
}

const dialogsReducer = (state=initialState,action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            return {
                ...state,
                messages:[...state.messages, {id:5, message:state.newMessageBody}],
                newMessageBody:""
            }
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator =(body)=> ({
    type: UPDATE_NEW_MESSAGE_BODY, body:body})








export default dialogsReducer;