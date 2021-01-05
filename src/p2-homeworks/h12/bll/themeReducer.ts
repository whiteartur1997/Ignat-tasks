import { themes } from "../HW12";

type ActionType = ReturnType<typeof changeTheme>;

export type ThemeStateType = {
    theme: string
}

const initState = {
    theme: themes[0]
};

export const themeReducer = (state: ThemeStateType = initState, action: ActionType): ThemeStateType => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
                theme: action.theme
            }
        }
        default:
            return state;
    }
};

export const changeTheme = (theme: string): { type: 'CHANGE-THEME', theme: string } => {
    return {
        type: 'CHANGE-THEME',
        theme
    } as const;
};