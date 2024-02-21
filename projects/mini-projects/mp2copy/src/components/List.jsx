import { useEffect, useState }  from 'react';
import styled from 'styled-components';
import Pokemon from "./Pokemon.jsx";

const Header = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
const HeaderImg = styled.img`
    height: 1em;
    margin-right: 0.5em;
`;
const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default function List() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    // Capitalize the name of the Pokemon
    function capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }    
    
    // Return the border color for the pokemon based on type
    function getColor(type) {
        if (type == "normal") {
            return "#AAB09F";
        } else if (type == "fighting") {
            return "#CB5F48";
        } else if (type == "flying") {
            return "#7DA6DE";
        } else if (type == "poison") {
            return "#B468B7";
        } else if (type == "ground") {
            return "#CC9F4F";
        } else if (type == "rock") {
            return "#B2A061";
        } else if (type == "bug") {
            return "#94BC4A";
        } else if (type == "ghost") {
            return "#846AB6";
        } else if (type == "steel") {
            return "#89A1B0";
        } else if (type == "fire") {
            return "#EA7A3C";
        } else if (type == "water") {
            return "#539AE2";
        } else if (type == "grass") {
            return "#71C558";
        } else if (type == "electric") {
            return "#E5C531";
        } else if (type == "psychic") {
            return "#E5709B";
        } else if (type == "ice") {
            return "#70CBD4";
        } else if (type == "dragon") {
            return "#6A7BAF";
        } else if (type == "dark") {
            return "#736C75";
        } else if (type == "fairy") {
            return "#E397D1";
        } else if (type == "shadow") {
            return "#744eb9"
        } else {
            return "#FFFFFF";
        } 
    }
    function getType (types) {
        let output = "";
        for (let i = 0; i < types.length; i++) {
            if (i == types.length-1) {
                output += types[i].type.name;
            } else {
                output += types[i].type.name + ", "
            }
        }
        return output;
    }

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
            const { results } = await data.json();

            const pokemonData = await Promise.all(results.map(async (pokemon) => {
                const pokeData = await fetch(pokemon.url);
                const res = await pokeData.json();
                return {
                    id: res.id,
                    name: capitalizeFirstLetter(pokemon.name),
                    image: res.sprites.front_default,
                    color: getColor(res.types[0].type.name),
                    height: res.height/10 + " m",
                    weight: res.weight/10 + " kg",
                    types: getType(res.types)
                }
            }))
            
            setPokemon(pokemonData);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            <Header>
                <HeaderImg src='./pokeball.png' alt="pokemon" />
                Pokémons
            </Header>
            
            <Row>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    pokemon.map((pokemon) => (
                        <Pokemon
                            id={pokemon.id}
                            name={pokemon.name}
                            color={pokemon.color}
                            image={pokemon.image}
                            height={pokemon.height}
                            weight={pokemon.weight}
                            types={pokemon.types}
                        />
                    ))
                )}
            </Row>
        </div>
    )
}