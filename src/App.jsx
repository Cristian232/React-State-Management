import Gold from "./components/Gold.jsx";
import {useEffect, useState} from "react";
import petsArray from "./data/MockData.jsx";


function App() {

    const [count, setCount] = useState(0);
    const [pet, setPet] = useState({});


    useEffect(() => {
        const getANewPet = (count) => {
            if (count>=5){
                count %= 5
            }
            setPet(petsArray[count])
        }
        getANewPet(count)
        return () => {
            delete getANewPet()
        };
    }, [count]);


    return (
        <>
            <Gold/>
            {pet && <p>Name: {pet.name} {pet.species}</p>}
            <p>Count : {count}</p>
            <button onClick={()=>setCount((c) => c + 1)}>Count++</button>
        </>
    )
}

export default App
