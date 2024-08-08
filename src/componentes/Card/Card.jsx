import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  margin: 200px;
  width: 400px;
  height: 600px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: red;
`;
const StyledHead = styled.div`
  width: 100%;
  height: 150px;
  background-color: blue;
  border-radius: 40px 40px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const ContainerName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const Name = styled.p`
  font-size: 40px;
`;

const Nickname = styled.p`
  font-size: 20px;
`;

const ContainerIcons = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  box-sizing: border-box;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #00ff73;
`;

const StyledDescription = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: green;
  text-align: center;
  padding: 0px 20px;
  box-sizing: border-box;
`;

const Description = styled.p`
  font-size: 20px;
`;

const ContainButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: yellow;
`;

const Button = styled.button`
    width: 150px;
    height: 40px;
    border-radius: 20px;
    background-color: #00ff73;
    font-size: 20px;
    cursor: pointer;
`;

const Card = () => {
  return (
    <StyledCard>
      <StyledHead>
        <StyledImg
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
        />
      </StyledHead>
      <ContainerName>
        <Name>John Doe</Name>
        <Nickname> @johndoe</Nickname>
      </ContainerName>
      <ContainerIcons>
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
      </ContainerIcons>
      <StyledDescription>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
          erat in felis tincidunt scelerisque. Nullam auctor, nunc ut lacinia
          vestibulum, tortor libero ultricies purus, nec ultricies felis purus
          id mi.
        </Description>
      </StyledDescription>
        <ContainButton>
            <Button>Click me!</Button>
            <Button>Click me!</Button>
        </ContainButton>
    </StyledCard>
  );
};

export default Card;
