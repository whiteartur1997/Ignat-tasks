import React from "react";
import Affair from "./Affair";
import { AffairType } from "./HW2";
import s from './Affairs.module.css';

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: any
    deleteAffairCallback: any
}

function Affairs(props: AffairsPropsType) {
    debugger
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a.id}
            id={a.id}
            affair={a.name}
            priority={a.priority}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ));

    const setAll = () => { }; // need to fix
    const setHigh = () => { };
    const setMiddle = () => { };
    const setLow = () => { };

    return (
        <div className={s.affairs}>
            <ul className={s.affairsList}>
                {mappedAffairs}
            </ul>
            <div className={s.affairsBtns}>
                <button onClick={setAll}>All</button>
                <button onClick={setHigh}>High</button>
                <button onClick={setMiddle}>Middle</button>
                <button onClick={setLow}>Low</button>
            </div>
        </div>
    );
}

export default Affairs;
