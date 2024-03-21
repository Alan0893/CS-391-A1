import styled from 'styled-components';

const CardWrapper = styled.div`
  padding: 1%;
  background: lightGray;
  border-radius: 5px;
  margin-bottom: 2%;
  text-align: center;
`;
const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  color: black;
`;
const Owner = styled.h4`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid darkGray;
  color: black;
`;
const Items = styled.p`
  color: black;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

function Card({ title, views, answers, tags, creationDate, score, owner, lastActivity }) {
  return (
    <CardWrapper>
      <Title>{title}</Title>
      <Owner>{owner}</Owner>
      <Items>
        <BoldText>Tags: </BoldText> 
        {tags}
      </Items>
      <Items>
        <BoldText>Views: </BoldText> 
        {views} | <BoldText>Answers: </BoldText> 
        {answers} | <BoldText>Score: </BoldText>
        {score}
      </Items>
      <Items>
        <BoldText>Creation Date: </BoldText> 
        {new Date(creationDate * 1000).toLocaleDateString()}
      </Items>
      <Items>
        <BoldText>Last Activity: </BoldText>
        {new Date(lastActivity * 1000).toLocaleDateString()}
      </Items>
    </CardWrapper>
  );
}

export default Card;
