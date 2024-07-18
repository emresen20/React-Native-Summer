import React, { createContext, useState } from "react";

const FitnessItems = createContext();

const FitnessContext = ({children}) => {
    const [completed, setComplated] = useState([]);
    const [workout, setWorkout] = useState(0);
    const [calories, setCalories] = useState(0);
    const [minutes, setMinutes] = useState(0);
    return (
        <FitnessItems.Provider value={{
            completed,
            setComplated,
            workout,
            setWorkout,
            calories,
            setCalories,
            minutes,
            setMinutes
        }}>
            {children}
        </FitnessItems.Provider>

    )
}

export {FitnessContext,FitnessItems}