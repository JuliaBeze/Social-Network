import dialogsReducer, {sendMessageCreator} from "./dialogs_reducer";
import profileReducer, {onAddPostActionCreator} from "./profile_reducer";

const state = {
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
        {id: 5, message: 'Bye'}
    ],
};


//1.старотовые значения

it('text of new message should be correct', () => {
    let action = sendMessageCreator("hello")

    //2.делаем action
    let newState = dialogsReducer(state,action)

    //3.проверяем ожидание
    expect(newState.messages.length).toBe(6)
});





