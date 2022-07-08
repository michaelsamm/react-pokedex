import Container from './container'
const PokemonDetails = props => {
    const {
        id,
        name,
        moves,
        sprites,
        base_experience,
        height,
        weight
    } = props.pokemon

    return (
        <Container className='results'>
            <img src={sprites.other['official-artwork'].front_default}
            alt={name}
            height="auto"
            width="100%"
            />
            <h1>{id}: {name}</h1>
            <p>Base Experience: {base_experience}</p>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <h2>Moves</h2>
            <ul>
                {moves.map(move => <li key={move.move.name}>{move.move.name}</li>)}
            </ul>
        </Container>
    )
}

export default PokemonDetails