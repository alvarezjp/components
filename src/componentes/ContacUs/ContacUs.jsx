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
import {
  clickSubmit,
  previeErrors,
  previeValue,
  handleClick,
  inputChange,
} from "./eventHandlers.js";
import useCountFalse from "./useCountFalse.js";
import Alert from "@mui/joy/Alert";
import IconButton from "@mui/joy/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReportIcon from '@mui/icons-material/Report';

const ContacUs = () => {

  const [formAlert, setFormAlert] = useState("");
  const [countFalse, setCountFalse] = useState(0);
  const [errors, setErrors] = useState(previeErrors);
  const [optionCheck, setOptionCheck] = useState("email");
  const [inputForm, setInputForm] = useState(previeValue);
  const { inputName, inputEmail, inputPhone, inputMultiline } = inputForm;

  useCountFalse(errors, setCountFalse);

  return (
    <Container>
      <ContainForm>
        {formAlert === "bien" && (
          <Alert
            // style={{ position: "absolute", top: "10px" }}
            key={"Success"}
            sx={{
              alignItems: "flex-start",
              width: "80%",
              border: "2px solid black",
              position: "absolute",
              top: "10px",
            }}
            startDecorator={<CheckCircleIcon />}
            variant="soft"
            color={"success"}
            endDecorator={
              <IconButton variant="soft" color={"success"}>
                <CloseRoundedIcon />
              </IconButton>
            }>
            <div>
              <div>Listo</div>
              <p>Esto esta listo</p>
            </div>
          </Alert>
        )}
        {formAlert === "mal" && (
          <Alert
            key={"Error"}
            sx={{
              alignItems: "flex-start",
              width: "80%",
              border: "2px solid black",
              position: "absolute",
              top: "10px",
            }}
            startDecorator={<ReportIcon /> }
            variant="soft"
            color={"danger"}
            endDecorator={
              <IconButton variant="soft" color={"danger"}>
                <CloseRoundedIcon />
              </IconButton>
            }>
            <div>
              <div>Mal</div>
              <p>Faltan datos</p>
            </div>
          </Alert>
        )}
        <Form onSubmit={(event) => clickSubmit(event, inputForm, setErrors,setFormAlert)}>
          <Title>Send us a Message</Title>
          <TextField
            id="outlined-basic"
            error={errors.name}
            label="Name"
            name="name"
            variant="outlined"
            value={inputName}
            onChange={(event) => inputChange(event, setInputForm, inputForm)}
          />
          <TextField
            error={errors.email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            value={inputEmail}
            onChange={(event) => inputChange(event, setInputForm, inputForm)}
          />
          <TextField
            error={errors.phone}
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            name="phone"
            value={inputPhone}
            onChange={(event) => inputChange(event, setInputForm, inputForm)}
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
              onChange={(event) => handleClick(event, setOptionCheck)}
              value={"email"}
              checked={optionCheck === "email"}
              label="Email"
            />
            <Radio
              onChange={(event) => handleClick(event, setOptionCheck)}
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
            onChange={(event) => inputChange(event, setInputForm, inputForm)}
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
