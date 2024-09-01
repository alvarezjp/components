import React from "react";
import { useState } from "react";
import {
  ContainChecks,
  Container,
  ContainForm,
  Form,
  InputChecks,
  SubText,
  Title,
} from "./Styled.jsx";
import TextField from "@mui/material/TextField";
import Radio from "@mui/joy/Radio";

const ContacUs = () => {
const [optionCheck, setOptionCheck] = useState("");

  const handleClick = (event) => {
    console.log(event.target.value);
    // setOptionCheck(event.target.value);
  }
  return (
    <Container>
      <ContainForm>
        <Form>
          <Title>Send us a Message</Title>
          <TextField  id="outlined-basic" label="Name" variant="outlined"  />
          <TextField id="outlined-basic" label="Email" variant="outlined"  />
          <TextField id="outlined-basic" label="Phone" variant="outlined"  />
          <SubText>Preferent contac method of comunication</SubText>
          <ContainChecks>
            <Radio onChange={handleClick} value={"email"} checked={optionCheck==="email"} label="Email" />
            <Radio   onChange={handleClick} value={"phone"}   label="Phone" />
          </ContainChecks>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={5}
            
          />
        </Form>
      </ContainForm>
    </Container>
  );
};

export default ContacUs;
