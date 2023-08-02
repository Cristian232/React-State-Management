import Gold from "./components/Gold.jsx";
import {useReducer} from "react";
import petsArray from "./data/MockData.jsx";
import Bronze from "./components/Bronze.jsx";

function reducer(state, action) {
    switch (action.species) {
        case "Cat" :
            return state.filter((pet) => pet.species === "Cat")
        case "Dog" :
            return state.filter((pet) => pet.species === "Dog")
        default :
            return [...state]
    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, petsArray);

    return (
    <>
     <Gold pets={state} whichSpecies={dispatch}/>
    </>
  )
}

export default App
