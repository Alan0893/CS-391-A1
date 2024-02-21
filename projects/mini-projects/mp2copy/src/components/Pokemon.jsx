import styled from 'styled-components';

const StyledCol = styled.div`
    width: 100%; 
    margin-bottom: 10px;
    @media only screen and (min-width: 460px) {
        width: 50%;
    } 
    @media only screen and (min-width: 600px) {
        width: 33.3%
    }
    @media only screen and (min-width: 768px) {
        width: 25%;
    }
    @media only screen and (min-width: 1024px) {
        width: 20%;
    }
`;
const StyledCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border: 6px solid ${(props) => props.color || 'rgba(255, 172, 172, 0.9)'};
    border-radius: 0.25rem;
    margin-left: 20px;
    margin-right: 20px;
`;
const CardImg = styled.img`
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
`;
const CardBody = styled.div`
    text-align: center;
    margin-left: 20px;
    margin-right: 20px; 
`;
const CardTitle = styled.h3`
    margin-bottom: 0.5rem;
`;
const InfoParagraph = styled.p`
    text-align: center;
`;
const Height = styled.span`
    text-align: left;
    display: inline-block;
    width: 50%; 
    margin-left: 0.5px;
`;
const Weight = styled.span`
    text-align: right;
    display: inline-block;
    margin-right: 0.5px;
`;

export default function Pokemon(pokemon) {
    return (
        <StyledCol>
            <StyledCard color={pokemon.color}>
                <CardImg
                    src={pokemon.image}
                    alt={pokemon.name}
                />
            </StyledCard>
            <CardBody id={pokemon.id}>
                <CardTitle>{pokemon.name}</CardTitle>
                <p>{`Types: ${pokemon.types}`}</p>
                <InfoParagraph>
                    <Height>{`H: ${pokemon.height}`}</Height>
                    <Weight>{`W: ${pokemon.weight}`}</Weight>
                </InfoParagraph>
            </CardBody>
        </StyledCol>
    )
}