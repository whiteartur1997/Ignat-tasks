import React from "react";
import { Provider } from "react-redux";
import store from "../../../p2-homeworks/h10/bll/store";
import HW5 from "../../../p2-homeworks/h5/HW5";
import s from "./App.module.css";


function App() {
    return (
        <Provider store={store}>
            <div className={s.App}>
                <div>react homeworks:</div>
                {/* <HW1 /> */}
                {/* <HW2 /> */}
                {/* <HW3/> */}
                {/* <HW4/> */}
                <HW5 />

            </div>
        </Provider>
    );
}

export default App;
