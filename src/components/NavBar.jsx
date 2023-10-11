
function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }) {

    const handleClick = () => {
        if (pokemonIndex < pokemonList.length - 1) {
            setPokemonIndex(pokemonIndex + 1);
        }
    }

    const handleClickA = () => {
        if (pokemonIndex > 0) {
            setPokemonIndex(pokemonIndex - 1);
        }

    }
    return (
        <div>
            < button onClick={handleClickA} >précédent</button>
            <button onClick={handleClick}>suivant</button>
        </div>
    );
}

export default NavBar;