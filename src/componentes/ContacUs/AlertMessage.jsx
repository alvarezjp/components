import React from "react";
import Alert from "@mui/joy/Alert";
import IconButton from "@mui/joy/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReportIcon from "@mui/icons-material/Report";

const AlertMessage = ({formAlert,setFormAlert}) => {
    const clicked = () => {
        setFormAlert("")
    }
  return (
    <>
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
              <CloseRoundedIcon onClick={clicked} />
            </IconButton>
          }>
          <div>
            <div>Gracias</div>
            <p>Sus datos fueron enviados</p>
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
          startDecorator={<ReportIcon />}
          variant="soft"
          color={"danger"}
          endDecorator={
            <IconButton variant="soft" color={"danger"}>
              <CloseRoundedIcon onClick={clicked} />
            </IconButton>
          }>
          <div>
            <div>Error</div>
            <p>Debe Ingresar datos en todas las casillas indicadas</p>
          </div>
        </Alert>
      )}
    </>
  );
};

export default AlertMessage;
