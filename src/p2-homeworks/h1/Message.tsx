import React from "react";
import s from './Message.module.css';

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string,
    sentByMe: boolean
}

function Message(props: MessageType) {
    return (
        <div className={`${s.message} ${props.sentByMe ? "" : s.right}`}>
            <img src={props.avatar} className={s.message__img} alt={"Avatar"} />
            <h6 className={s.message__name}>{props.name}</h6>
            <p className={s.message__descr}>{props.message}</p>
            <span className={s.message__time}>{props.time}</span>
        </div>
    );
}

export default Message;
