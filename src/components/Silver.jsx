import Bronze from "./Bronze.jsx";

const Silver = ({pets}) => {
    return (
        <div style={{color:"silver"}}>
            <h1>Silver</h1>
            {pets.map((pet)=><p key={pet.id}>{`${pet.name}, ${pet.species} age ${pet.age}`}</p>)}
            <Bronze />
        </div>
    );
};

export default Silver;