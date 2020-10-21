import React from "react";
import { AffairPriorityType } from "./HW2";
import s from './Affairs.module.css';

type AffairPropsType = {
    key: number
    id: number
    affair: string
    priority: AffairPriorityType
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => { props.deleteAffairCallback(props.id) };// need to fix
    return (
        <li className={s.affairsItem}>
            <span>{props.affair}</span>
            <span className={s[props.priority]}>{props.priority}</span>
            <button onClick={deleteCallback}>X</button>
        </li>
    );
}

export default Affair;
