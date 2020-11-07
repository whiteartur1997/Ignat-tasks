import React from "react";
import Affair from "./Affair";
import { AffairType, FilterType } from "./HW2";
import s from './Affairs.module.css';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    // setFilter: any
    deleteAffairCallback: (id: number) => void
    filterAffairsCallback: (filter: FilterType) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a.id}
            id={a.id}
            affair={a.name}
            priority={a.priority}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ));

    const setAll = () => {props.filterAffairsCallback("all")}; // need to fix
    const setHigh = () => {props.filterAffairsCallback("high")};
    const setMiddle = () => {props.filterAffairsCallback("medium")};
    const setLow = () => {props.filterAffairsCallback("low")};

    return (
        <div className={s.affairs}>
            <ul className={s.affairsList}>
                {mappedAffairs}
            </ul>
            <div className={s.affairsBtns}>
                <SuperButton onClick={setAll}>All</SuperButton>
                <SuperButton onClick={setHigh}>High</SuperButton>
                <SuperButton onClick={setMiddle}>Middle</SuperButton>
                <SuperButton onClick={setLow}>Low</SuperButton>
            </div>
        </div>
    );
}

export default Affairs;
