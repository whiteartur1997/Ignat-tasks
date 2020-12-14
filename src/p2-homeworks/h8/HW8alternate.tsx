import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {PeopleType} from "./bll/tests/homeWorkReducer.test";
import s from './HW8.module.css';
import SuperEditableSpan from "../h6/common/c4-SuperEditableSpan/SuperEditableSpan";

const initialPeople: PeopleType[] = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState<PeopleType[]>(initialPeople);
    const [value, setValue] = useState<string>("18");

    const finalPeople = people.map((p, i) => (
        <tr key={p._id}>
            <td>{i + 1}</td>
            <td>{p.name}</td>
            <td>{p.age}</td>
        </tr>
    ))

    const sortUp = () => {
        setPeople(homeWorkReducer(initialPeople, {
            type: "sort",
            payload: "up"
        }));
    }

    const sortDown = () => {
        setPeople(homeWorkReducer(initialPeople, {
            type: "sort",
            payload: "down"
        }));
    }

    const checkAge = () => {
        setPeople(homeWorkReducer(initialPeople, {
            type: "check",
            payload: 18
        }))
    }
    return (
        <div className={s.HW8}>
            <hr/>
            homeworks 8
            <table className={s.HW8__table}>
                <thead>
                <tr className={s.HW8__table__header}>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                    {finalPeople}
                </tbody>
            </table>
            <div className={s.HW8__buttons}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={checkAge}>check 18+</SuperButton>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{ // plain obj
                        children: "" ? undefined : "double click to change age for check",
                    }}>18</SuperEditableSpan>
            </div>
        </div>
    );
}

export default HW8;
