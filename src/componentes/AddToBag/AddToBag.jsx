import React from "react";
import {
  BlockSize,
  Brand,
  Button,
  ContainBlock,
  Container,
  ContainerPrice,
  ContainerSize,
  Description,
  Discount,
  ListImg,
  MainImg,
  MiniImg,
  PreviusPrice,
  Price,
  ProductDetails,
  TextSize,
  Title,
  ViewImg,
} from "./Styled.jsx";
import { useState } from "react";

const AddToBag = () => {
  const [imgSelection, setImgSelection] = useState("0");
  const [selectionSize, setSelectionSize] = useState("S");
  const size = ["S", "M", "L", "XL", "XXL"];
  const imgViews = [...Array(10).keys()];

  const handleClickImg= (event)=>{
    setImgSelection(event.target.id);
  }
  const handleClickSize= (event)=>{
    setSelectionSize(event.target.id);
    console.log(event.target.id);
  }

  return (
    <Container>
      <ListImg>
        {
          imgViews.map((i) => {
            return <MiniImg onClick={handleClickImg} src={`/src/assets/AddToBag/m${i}.jpg`} id={i} key={i}/>;
          })
        }
      </ListImg>
      <MainImg>
        <ViewImg src={`/src/assets/AddToBag/${imgSelection}.jpg`} />
      </MainImg>
      <ProductDetails>
        <Brand>Lippi</Brand>
        <Title>Chaqueta Hombre Suntra Steampro Hoody Jacket Negro Lippi</Title>
        <Description>
          La gran capacidad térmica del Softshell, llevada a los pantalones. El
          Kimball es ideal para trekking y hiking. Un pantalón flexible y
          versátil que vale la pena tener para disfrutar de la vida al aire
          libre en invierno.acidad térmica del Softshell, llevada a los pantalones. El
          Kimball es ideal para trekking y hiking. Un pantalón flexible y
          versátil que vale la pena tener para disfrutar de la vida al aire
          libre en invierno.acidad térmica del Softshell, llevada a los pantalones. El
          Kimball es ideal para trekking y hiking. Un pantalón flexible y
          versátil que vale la pena tener para disfrutar de la vida al aire
          libre en invierno.
        </Description>
        <ContainerPrice>
          <Price>$ 1.300</Price>
          <Discount>-20%</Discount>
          <PreviusPrice>$1.500</PreviusPrice>
        </ContainerPrice>
        <ContainerSize>
          <TextSize>Choose Size</TextSize>
          <ContainBlock>
            {size.map((sizes, i) => {
              return <BlockSize onClick={handleClickSize} key={i} id={sizes} className={selectionSize === sizes && "active" }>{sizes}</BlockSize>;
            })}
          </ContainBlock>
        </ContainerSize>
        <Button> ADD TO BAGG </Button>
      </ProductDetails>
    </Container>
  );
};

export default AddToBag;
