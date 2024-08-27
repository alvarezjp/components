import React from "react";
import { Icon } from "@mui/material";
import { ContainIconsHook } from "./Styled";


const IconsHook = ({ icon, nameSection,state,onClick }) => {
  

  return (
    <ContainIconsHook>
      <Icon
        className={state === nameSection ? "active" : "desactive"}
        sx={{ color: "#7a7a7aa9", fontSize: "30px" }}
        baseClassName="material-icons-outlined"
        onClick={onClick}
        id={nameSection}>
        {icon}
      </Icon>
    </ContainIconsHook>
  );
};

export default IconsHook;
