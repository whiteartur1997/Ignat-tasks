import React, { useState } from "react";
import Affairs from "./Affairs";

// types
export type AffairPriorityType = "high" | "medium" | "low";
export type AffairType = {
    id: number
    name: string
    priority: AffairPriorityType
};
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
    { id: 1, name: "React", priority: "high" },
    { id: 2, name: "Training", priority: "high" },
    { id: 3, name: "YouTube", priority: "medium" },
    { id: 4, name: "Work", priority: "medium" },
    { id: 5, name: "Supper", priority: "low" },
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === "all") return affairs;
    else {
        return affairs.filter(a => a.priority === filter);
    }
}
export const deleteAffair = (affairs: Array<AffairType>, id: number): Array<AffairType> => {
    return affairs.filter(a => a.id !== id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>("all");
    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id));
    const filterAffairsCallback = (filter: FilterType) => setFilter(filter);
    return (
        <div>
            homeworks 2
            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                deleteAffairCallback={deleteAffairCallback}
                filterAffairsCallback={filterAffairsCallback}
            />
        </div>
    );
}

export default HW2;
