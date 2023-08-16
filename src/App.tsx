import Gold from "./components/Gold";
import {useEffect, useState} from "react";

interface Pokemon {
    id: number;
    name: string;
    type: string[];
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
}

function usePokemon() : {
    pokemon: Pokemon[];
} {
    const [pokemon, setPokemon] = useState<Pokemon[]>([])

    useEffect(() => {
       fetch("/pokemon.json")
           .then((response) => response.json())
           .then((data) => setPokemon(data))
    }, []);

    return {pokemon}
}

const PokemonList = ({pokemon}:{ pokemon: Pokemon[]})=>{
    return (
        <div>
            {pokemon.map((poke) => (
                <div key={poke.id}>{poke.name}</div>
            ))}
        </div>
    )
}

function App() {

    const {pokemon} = usePokemon()

    return (
        <>
            <PokemonList pokemon={pokemon} />
            <Gold/>
        </>
    )
}

export default App
