import Silver from "./Silver.jsx";
import {useEffect, useState} from "react";

const Gold = ({getPets}) => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        setPets([...pets,getPets()])
        console.log("getPets called from Gold useEffect")
    }, [getPets]);


    return (
        <div style={{color:"gold"}}>
            <h1>Gold</h1>
            {pets.map((pet,index) => <p key={index}>{pet.name} {pet.species} age:{pet.age}</p>)}
            <Silver />
        </div>
    );
};

export default Gold;