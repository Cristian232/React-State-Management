import Silver from "./Silver.jsx";

const Gold = ({pets, whichSpecies}) => {

    return (
        <div style={{color:"gold"}}>
            <h1 onClick={()=> whichSpecies({species: "none"})}>Gold</h1>
            {pets.length > 0 &&
                pets.map((pet) => {
                    return <p key={pet.id}>{pet.name} age: {pet.age} species: {pet.species}</p>
                })}
            <Silver />
        </div>
    );
};

export default Gold;