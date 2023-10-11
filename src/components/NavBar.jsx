import { useEffect } from "react";

function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }) {

    const handleClick = (index) => {
        if (pokemonList[index].name === "Pikachu") {
            alert("pika pikachu !!!");
        }
        setPokemonIndex(index);
    }

    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(index)}
                >
                    {pokemon.name}
                </button>
            ))}


        </div>
    );
}

export default NavBar;