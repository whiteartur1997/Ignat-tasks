import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Clock.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId);
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date());
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true);
    };
    const onMouseLeave = () => {
        setShow(false);
    };

    const time = {
        hours: date.getHours().toString().length === 1
            ? "0" + date.getHours()
            : date.getHours(),
        minutes: date.getMinutes().toString().length === 1
            ? "0" + date.getMinutes()
            : date.getMinutes(),
        seconds: date.getSeconds().toString().length === 1
            ? "0" + date.getSeconds()
            : date.getSeconds()
    }

    const dateInFrame = {
        day: date.toLocaleString('eng', {weekday: 'short'}),
        date: date.getDate(),
        month: date.toLocaleString('eng', { month: 'short' }),
        year: date.getFullYear()
    }

    const stringTime = `${time.hours}:${time.minutes}:${time.seconds}`;
    const stringDate = `${dateInFrame.day}, ${dateInFrame.date} ${dateInFrame.month} ${dateInFrame.year}`; // fix with date

    return (
        <div className={s.clockContainer}>
            <div className={s.frame}>
                <div
                    className={s.time}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >{stringTime}</div>
                <div className={s.info}>
                    <span className={s.frameDate}>{show && stringDate}</span>
                    <span className={s.frameTitle}>Hover time to see the date</span>
                </div>
            </div>
            <div>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    );
}

export default Clock;
