type ActionType = ReturnType<typeof setLoading>;

export type LoadingStateType = {
    loading: boolean
}

const initState: LoadingStateType = {
    loading: false
};

export const loadingReducer = (state: LoadingStateType = initState, action: ActionType): LoadingStateType => { // fix any
    switch (action.type) {
        case "SET-LOADING": {
            return {
                ...state,
                loading: action.value
            };
        }
        default: return state;
    }
};

export const setLoading = (value: boolean) => {
    return {
        type: 'SET-LOADING',
        value
    } as const;
};