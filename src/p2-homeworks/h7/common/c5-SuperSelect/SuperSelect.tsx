import React, { ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes } from "react";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    // нормально ли так проверять, передали ли options
    const mappedOptions: JSX.Element[] = options?.map((opt, i) => <option key={i}>{opt}</option>) || [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange мы должы передавать в пропсах?
        // onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value);
    }

    return (
            <select onChange={onChangeCallback} {...restProps}>
                {mappedOptions}
            </select>
    );
}

export default SuperSelect;
