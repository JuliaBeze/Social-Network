const SEND_MESSAGE = 'SEND_MESSAGE'

export type InitialStateType = typeof initialState

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}


const initialState = {
    dialogs: [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Sacha'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Svetlana'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your study'},
        {id: 3, message: 'Bye'},
        {id: 4, message: 'Bye'},
        {id: 4, message: 'Bye'}
    ] as Array<MessageType>,
};

const dialogsReducer = (state=initialState,action:any):InitialStateType => {
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

type SendMessageType = {
    type: typeof SEND_MESSAGE
    newMessageBody:string
}

export const sendMessageCreator = (newMessageBody:string):SendMessageType => ({type: SEND_MESSAGE,newMessageBody})

export default dialogsReducer;