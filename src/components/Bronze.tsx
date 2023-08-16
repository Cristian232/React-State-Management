import {useContext} from "react";
import {PokemonContext} from "../App";

const Bronze = () => {
    const { pokemon } = useContext(PokemonContext)
    return (
        <div style={{color:"\t#CD7F32"}}>
            <h1>Bronze</h1>
            {pokemon.filter((p) => p.id == 1).map(poke=> <div> {poke.name} </div>)}
        </div>
    );
};

export default Bronze;