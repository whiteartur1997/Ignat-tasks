import {PeopleType} from "./tests/homeWorkReducer.test";

type ActionsType = SortNamesActionType | CheckAgeActionType;

type SortNamesActionType = {
    type: "sort"
    payload: "up" | "down"
}

type CheckAgeActionType = {
    type: "check"
    payload: number
}

export const homeWorkReducer = (state: PeopleType[],
                                action: ActionsType): PeopleType[] => {
    switch (action.type) {
        case "sort": {
            const stateCopy = [...state];
            if(action.payload === "up") {
                return stateCopy.sort((a,b) => (
                    a.name > b.name ? -1 : 1
                ));
            } else {
                return stateCopy.sort((a, b) => (
                    a.name > b.name ? 1 : -1
                ))
            }
        }
        case "check": {
            const stateCopy = [...state];
            return stateCopy.filter(p => p.age >= action.payload)
        }
        default: return state
    }
};
