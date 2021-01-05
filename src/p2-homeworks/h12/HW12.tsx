import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import { changeTheme } from "./bll/themeReducer";
import s from "./HW12.module.css";

export const themes = ['dark', 'red', 'some', 'blue'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme);
    const dispatch = useDispatch();

    function onChangeCallback(e: ChangeEvent<HTMLSelectElement>) {
        dispatch(changeTheme(e.currentTarget.value))
    }

    return (
        <div className={s[theme]}>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div>
                <div className={s[theme + '-text']}>Choose your theme:</div>
                <SuperSelect options={themes} onChange={onChangeCallback} />
                <div className={s[theme + '-text']}>Now your theme is {theme}</div>
            </div>
        </div>
    );
}

export default HW12;
