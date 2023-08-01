import Silver from "./Silver.jsx";

const Gold = (props) => {

    return (
        <div style={{color:"gold"}}>
            <h1>Gold</h1>
            {props.pets.map((pet)=><p key={pet.id}>{`${pet.name}, ${pet.species} age ${pet.age}`}</p>)}
            <Silver pets={props.pets}/>
        </div>
    );
};

export default Gold;