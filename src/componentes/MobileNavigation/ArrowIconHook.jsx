import React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Home from "@mui/icons-material/Home";
import { Icon } from '@mui/material';


const ArrowIconHook = ({ item, icon }) => {
  return (
    <List>
      <ListItem>
        <ListItemButton selected={false} variant="plain">
          <ListItemDecorator>
            <Icon>{icon} </Icon>
          </ListItemDecorator>
          <ListItemContent>{item}</ListItemContent>
          <KeyboardArrowRightIcon />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default ArrowIconHook;
