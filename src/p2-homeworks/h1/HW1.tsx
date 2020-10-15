import React from "react";
import s from './Message.module.css';
import Message from "./Message";

const messageDataByMe = {
    avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png",
    name: "Batman",
    message: "This city needs a new hero",
    time: "22:32",
    sentByMe: true
};

const messageDataByPartner = {
    avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/breaking_bad_chemisrty_avatar_heisenberg-256.png",
    name: "Heisenberg",
    message: "Yes, bro. Come to Albuquerque",
    time: "22:35",
    sentByMe: false
};

function HW1() {
    return (
        <>
            <div className={s.tasknumber}>Task 1</div>
            <div className={s.layout}>
                <Message
                    avatar={messageDataByMe.avatar}
                    name={messageDataByMe.name}
                    message={messageDataByMe.message}
                    time={messageDataByMe.time}
                    sentByMe={messageDataByMe.sentByMe}
                />
                <Message
                    avatar={messageDataByPartner.avatar}
                    name={messageDataByPartner.name}
                    message={messageDataByPartner.message}
                    time={messageDataByPartner.time}
                    sentByMe={messageDataByPartner.sentByMe}
                />
            </div>
        </>
    );
}

export default HW1;
