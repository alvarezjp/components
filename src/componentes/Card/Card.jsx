import React from "react";
import styled from "styled-components";
import WaveSVG from "./WaveSvg";
import PropTypes from "prop-types";

const StyledCard = styled.div`
  margin: 200px;
  width: 400px;
  height: 600px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
`;
const StyledHead = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 40px 40px 0 0;
  box-sizing: border-box;
`;

const ContainImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  z-index: 1;
`;
const StyledImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
`;

const ContainerName = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  /* border: 1px solid black; */
`;

const Name = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 40px;
`;

const Nickname = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding-top: 10px;
  font-size: 20px;
`;

const ContainerIcons = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* border: 1px solid black; */
  padding-top: 10px;
  box-sizing: border-box;
`;

const Icon = styled.img`
  background-image: url(${(props) => props.src});
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;

const StyledDescription = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 150px;
  text-align: center;
  box-sizing: border-box;
`;

const Description = styled.p`
  font-size: 16px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.3;
`;

const ContainButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 100px;
  box-sizing: border-box;
`;

const Button = styled.button(function (props) {
  return {
    width: "150px",
    height: "35px",
    borderRadius: "20px",
    backgroundColor: `${props.color}66` || "white",
    border: props.color ? "none" :"1px solid #8d8b8b",
    color: props.color ? props.color : "#8d8b8b",
    fontSize: " 16px",
    fontWeight: "600",
    cursor: "pointer",
  };
});

const Card = ({ color, img }) => {
  return (
    <StyledCard>
      <StyledHead>
        <WaveSVG color={color} />
        <ContainImg>
          <StyledImg
            src={img || "https://www.w3schools.com/howto/img_avatar.png"}
            alt="Avatar"
          />
        </ContainImg>
      </StyledHead>
      <ContainerName>
        <Name>John Doe</Name>
        <Nickname> @johndoe</Nickname>
      </ContainerName>
      <ContainerIcons>
        <Icon src="/src/assets/icons/dribbble.png"></Icon>
        <Icon src="/src/assets/icons/facebook.png"></Icon>
        <Icon src="/src/assets/icons/instagram.png"></Icon>
        <Icon src="/src/assets/icons/linkedin.png"></Icon>
        <Icon src="/src/assets/icons/x.png"></Icon>
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
        <Button color={color}>Follow</Button>
        <Button>Messaje</Button>
      </ContainButton>
    </StyledCard>
  );
};

Card.propTypes = {
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
