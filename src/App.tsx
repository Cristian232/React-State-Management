import Gold from "./components/Gold";
import {createContext, useContext, useEffect, useState} from "react";

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

const ThemeContext = createContext("light")

const PokemonList = ({pokemon}:{ pokemon: Pokemon[]})=>{
    return (
        <div>
            <div>Theme: {useContext(ThemeContext)}</div>
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
            <ThemeContext.Provider value={"light"}>
                <PokemonList pokemon={pokemon} />
                <Gold/>
            </ThemeContext.Provider>
        </>
    )
}

export default App
