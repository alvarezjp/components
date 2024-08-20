import styled from "styled-components";

const Container = styled.div`
  /* border: 4px solid red; */
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 15% 50% 35%;
  box-sizing: border-box;
  background-color: #f2f2f2;

  @media (max-width: 992px) {
    grid-template-columns: 20% 80% ;

    & > :nth-child(3) {
      grid-column: span 2; /* Ocupa una columna completa en pantallas pequeñas */
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr ;
    /* grid-template-rows: 50% 10% 40%; */
    /* grid-template-rows: repeat(3, auto); */

    & > :nth-child(1) {
      grid-row: 2; /* El primer hijo pasa a la segunda fila */
    }

    & > :nth-child(2) {
      grid-row: 1; /* El segundo hijo pasa a la tercera fila */
    }

    & > :nth-child(3) {
      grid-row: 3; /* El tercer hijo pasa a la primera fila */
    }
  }
`;
const ListImg = styled.div`
  /* border: 4px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  /* width: 15%; */
  height: 95%;
  box-sizing: border-box;
  overflow-y: auto;
  background-color: #f2f2f2;
  padding: 16px 0px;
  &::-webkit-scrollbar {
    width: 4px; /* Ancho de la barra de desplazamiento vertical */
    height: 5px; /* Alto de la barra de desplazamiento horizontal */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #88888845; /* Color del pulgar */
    border-radius: 12px;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    height:150px;
    width: 100%;
    overflow-y: hidden;
  }
`;

const MiniImg = styled.img`
  box-sizing: border-box;
  cursor: pointer;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
`;

const MainImg = styled.div`
  /* border: 4px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 50%; */
  height: 100%;
  box-sizing: border-box;
  background-color: #f2f2f2;
`;

const ViewImg = styled.img`
  /* border: 1px solid red; */
  background-size: cover;
  width: 90%;
  height: 90%;

`;
const ProductDetails = styled.div`
  /* border: 4px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  /* width: 35%; */
  height: 100%;
  box-sizing: border-box;
  padding: 24px 16px;
  background-color: #f2f2f2;
`;

const Brand = styled.p`
  /* border: 1px solid green; */
  font-family: "Times New Roman", Times, serif;
  font-size: 24px;
  font-weight: 600;
  color: #1b71e3;
`;
const Title = styled.p`
  /* border: 1px solid blue; */
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 40px;
  font-weight: 700;
`;
const Description = styled.p`
  /* border: 1px solid green; */
  height: 100px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: gray;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px; /* Ancho de la barra de desplazamiento vertical */
    height: 5px; /* Alto de la barra de desplazamiento horizontal */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #88888845; /* Color del pulgar */
    border-radius: 12px;
  }
`;
const ContainerPrice = styled.section`
  /* border: 1px solid green; */
  display: grid;
  grid-template-columns: 120px 50px;
  row-gap: 8px;
  column-gap: 8px;
  align-items: center;
`;

const Price = styled.p`
  font-size: 40px;
  font-weight: 700;
  font-family: "Times New Roman", Times, serif;
  color: black;
`;

const Discount = styled.p`
  font-size: 16px;
  font-weight: 700;
  border-radius: 3px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #347be6;
  background-color: #adcefa;
`;
const PreviusPrice = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-decoration: line-through;
  color: gray;
`;

const ContainerSize = styled.section`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  p {
    /* color:red; */
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
  }
  gap: 8px;
`;

const TextSize = styled.p`
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
`;

const ContainBlock = styled.article`
  /* border: 1px solid blue; */
  display: grid;
  width: 70%;
  height: 40px;
  grid-template-columns: repeat(7, 40px);
`;
const BlockSize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
  &.active {
    background-color: black;
    color: white;
  }
`;

const Button = styled.button`
  width: 100%;
  /* height: 20px; */
  background-color: #1a76fd;
  font-size: 16px;
  color: #e2fff7;
  border: none;
  padding: 10px 0px;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;
`;

export {
  Container,
  ListImg,
  MiniImg,
  MainImg,
  ViewImg,
  ProductDetails,
  Brand,
  Title,
  Description,
  ContainerPrice,
  Price,
  Discount,
  PreviusPrice,
  ContainerSize,
  TextSize,
  ContainBlock,
  BlockSize,
  Button,
};
