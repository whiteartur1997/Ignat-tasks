import React, { useState } from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import { restoreState, saveState } from "./localStorage/localStorage";

function HW6() {
    const [value, setValue] = useState<string>(localStorage.getItem("editable-span-value")
        && JSON.parse(localStorage.getItem("editable-span-value") || "")
        || "");

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {
        setValue(restoreState("editable-span-value", value));
    };

    return (
        <div>
            <hr />
            SuperEditableSpan HW6
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{ // plain obj
                        children: value ? undefined : "enter text...",
                    }}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>
        </div>
    );
}

export default HW6;
