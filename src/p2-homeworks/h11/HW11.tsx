import React, { useState } from "react";
import { Range } from "react-input-range";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    type SupersuperDoubleRangeType = {
        min: number
        max: number
        step: number
        value: number | Range
    }

    const [superDoubleRange, setSuperDoubleRange] = useState<SupersuperDoubleRangeType>({
        min: 0,
        max: 100,
        step: 1,
        value: { min: value1, max: value2 }
    })

    function changeSuperRange(value: number) {
        debugger
        // так работает
        // if ((value1 + 1 !== value2 && value2 > value) || value === value1 - 1) {
        if ((value1 + 1 !== value2 && value2 > value) || value < value1) {
            setValue1(value);
            if (superDoubleRange.min < superDoubleRange.max) {
                changeSuperDoubleRange({ min: value, max: value2 });
            }
        }
    }

    function changeSuperDoubleRange(range: number | Range) {
        if (typeof range === "object") {
            setValue1(range.min);
            setValue2(range.max);
        }
        if (value1 < value2) {
            setSuperDoubleRange({
                ...superDoubleRange,
                value: range
            })
        }
    }

    return (
        <div>
            <hr />
            homeworks 11

            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={changeSuperRange}
                />
            </div>

            <div style={{ padding: "0px 50px" }}>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={changeSuperDoubleRange}
                    {...superDoubleRange} />
                <span>{value2}</span>
            </div>
        </div>
    );
}

export default HW11;
