import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

let state = props.dialogsPage;
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.dialogsPage.newMessageBody;

let onSendMessageClick =()=> {
    props.sendMessage()
};

let onNewMessageChange =(e)=> {
    let body = e.target.value;
    props.updateNewMessageBody(body);
};

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div> <textarea onChange={onNewMessageChange}
                        value={newMessageBody}
                        placeholder="Enter your message"> </textarea> </div>
                    <div> <button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;

