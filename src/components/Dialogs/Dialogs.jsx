import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";


const maxLength100 = maxLengthCreator(100)
const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key = {d.id} name={d.name} id={d.id}/>);        //Профили диалогов

    let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);       //Сообщения диалогов

    let newMessageBody = props.dialogsPage.newMessageBody;

    let addNewMessageChange = (values) => {
        props.sendMessage(values.newMessageBody)
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <AddMessageFormRedux onSubmit = {addNewMessageChange}/>
        </div>
    )
}

const AddMessageForm = (props)=> {
    return (
            <form onSubmit={props.handleSubmit}>
                <div className={s.sendMessage}>
                    <Field component={Textarea}
                           validate={[required, maxLength100]}
                           name="newMessageBody"
                           placeholder="Enter your message"
                    />
                </div>
                <div className={s.sendMessage}><button>Send</button></div>
            </form>
        )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;

