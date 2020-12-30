import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { setLoading } from "./bll/loadingReducer";
import { AppStoreType } from "./bll/store";
import spinner from './images/Spinner.svg';

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading);
    const dispatch = useDispatch();
    console.log("HW10");
    const setLoadingHandler = () => {
        dispatch(setLoading(true));
        setTimeout(() => {
            dispatch(setLoading(false))
        }, 2000);
    };

    return (
        <div>
            <hr />
            homeworks 10

            {loading
                ? (
                    <div>
                        <img src={spinner} alt="spinner" />
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoadingHandler}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr />
        </div>
    );
}

export default HW10;
