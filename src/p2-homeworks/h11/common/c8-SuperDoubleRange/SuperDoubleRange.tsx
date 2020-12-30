import React from "react";
import InputRange, { Range } from 'react-input-range';
import 'react-input-range/lib/css/index.css';

type SuperDoubleRangePropsType = {
    onChangeRange: (value: number | Range) => void
    value: number | Range
    min?: number
    max?: number
    step?: number
    disable?: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step, disable
    }
) => {

    function changeValueHandler(value: number | Range) {
        onChangeRange && onChangeRange(value)
    }

    return (
        <InputRange
            minValue={min}
            maxValue={max}
            step={step}
            value={value}
            onChange={changeValueHandler} />
    );
}

export default SuperDoubleRange;
