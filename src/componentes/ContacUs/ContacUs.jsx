import React from "react";
import { useState, useEffect } from "react";
import {
  ContainChecks,
  Container,
  ContainForm,
  Form,
  SubText,
  Title,
} from "./Styled.jsx";
import TextField from "@mui/material/TextField";
import Radio from "@mui/joy/Radio";
import Button from "@mui/joy/Button";

const ContacUs = () => {
  const [count, setCount] = useState(0);

  const previeValue = {
    name: "",
    email: "",
    phone: "",
    multiline: "",
  };

  let previeErrors = {
    name: false,
    email: false,
    phone: false,
    multiline: false,
  };

  const [submitForm, setSubmitForm] = useState(false);
  const [countFalse, setCountFalse] = useState(0);
  const [errors, setErrors] = useState(previeErrors);
  const [optionCheck, setOptionCheck] = useState("email");
  const [inputForm, setInputForm] = useState(previeValue);
  const { inputName, inputEmail, inputPhone, inputMultiline } = inputForm;

  const handleClick = (event) => {
    setOptionCheck(event.target.value);
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    console.log("El formulario se envio ");
    const allFilled = Object.values(inputForm).every((value) => value.trim() !== "");
    
    if (allFilled) {
      alert("El formulario se ha enviado correctamente.");
    } else {
      alert("Por favor, rellena todos los campos.");
    }

    
    Object.entries(inputForm).forEach(([key, value]) => {
      if (!value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [key]: true,
        }));
      }
      if (value !== "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [key]: false,
        }));
      }
    });
  };

  const inputChange = (event) => {
    const nombre = event.target.name;
    const valor = event.target.value;
    setInputForm({ ...inputForm, [nombre]: valor });
  };

  useEffect(() => {
    const countFalse = Object.values(errors).filter(
      (error) => error === true
    ).length;
    setCountFalse(countFalse);
  }, [errors]);



  return (
    <Container>
      <ContainForm>
        <Form onSubmit={clickSubmit}>
          <Title>Send us a Message</Title>
          <TextField
            id="outlined-basic"
            // id="outlined-error"
            error={errors.name}
            label="Name"
            name="name"
            variant="outlined"
            value={inputName}
            onChange={inputChange}
          />
          <TextField
            error={errors.email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            value={inputEmail}
            onChange={inputChange}
          />
          <TextField
            error={errors.phone}
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            name="phone"
            value={inputPhone}
            onChange={inputChange}
            className="inputPhone"
            type="number"
            InputProps={{
              inputProps: {
                style: {
                  MozAppearance: "textfield",
                },
              },
              sx: {
                "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
                  {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
              },
            }}
          />
          <SubText>Preferent contac method of comunication</SubText>
          <ContainChecks>
            <Radio
              onChange={handleClick}
              value={"email"}
              checked={optionCheck === "email"}
              label="Email"
            />
            <Radio
              onChange={handleClick}
              value={"phone"}
              checked={optionCheck === "phone"}
              label="Phone"
            />
          </ContainChecks>
          <TextField
            error={errors.multiline}
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={5}
            name="multiline"
            value={inputMultiline}
            onChange={inputChange}
          />
          <Button size="lg" variant="solid" color="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </ContainForm>
    </Container>
  );
};

export default ContacUs;
