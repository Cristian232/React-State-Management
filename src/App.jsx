import Gold from "./components/Gold.jsx";
import {useState} from "react";
import petsArray from "./data/MockData.jsx";

function App() {

    const [pets, setPets] = useState(petsArray);
    // {pets.map((pet)=><p key={pet.id}>{`${pet.name}, ${pet.species} age ${pet.age}`}</p>)}

    return (
    <>
     <Gold pets={pets}/>
    </>
  )
}

export default App
