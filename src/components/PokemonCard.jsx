

function PokemonCard(props) {
    console.log(props)
    const pokemon = props.pokemon;

    return (
        <figure>
            {pokemon.imgSrc ? (
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                    alt="Image de Bulbasaur" />) : (
                <p>???</p>)
            }

            <figcaption>
                <h1>{pokemon.name}</h1>
            </figcaption>
        </figure>
    );

}


export default PokemonCard;

