import React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Avatar from "@mui/material/Avatar";
import {  grey } from '@mui/material/colors';
import { Icon } from "@mui/material";

const ArrowIconHook = ({ item, icon }) => {
  return (
    <List>
      <ListItem>
        <ListItemButton selected={false} variant="plain" sx={{paddingLeft:"0px",paddingRight:"0px"}} >
          <ListItemDecorator >
            <Avatar  sx={{ bgcolor: grey[300],width: 35, height: 35 }} variant="rounded">
              <Icon sx={{color:"black"}}>{icon} </Icon>
            </Avatar>
          </ListItemDecorator>
          <ListItemContent sx={{paddingLeft:"8px",fontWeight:"700"}}>{item}</ListItemContent>
          <KeyboardArrowRightIcon />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default ArrowIconHook;
