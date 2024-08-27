import React from "react";
import { useState } from "react";
import {
  Avatar,
  ContainAll,
  ContainAvatar,
  ContainBody,
  ContainSubMenu,
  ContainIcons,
  ContainText,
  TitleJob,
  TitleName,
} from "./Styled";

import IconsHook from "./IconsHook";
import ArrowIconHook from "./ArrowIconHook";

const MobileNavigation = () => {
  const category = [
    { nameSection: "Personal data", nameIcon: "people" },
    { nameSection: "Messages", nameIcon: "mail" },
    { nameSection: "Notifications", nameIcon: "notifications" },
    { nameSection: "Location", nameIcon: "place" },
    { nameSection: "Community", nameIcon: "groups" },
  ];
  const ConfigurationCategory = [
    { nameSection: "FAQS", nameIcon: "people" },
    { nameSection: "Settings", nameIcon: "settings" },
  ];
  const bottomMenu = [
    { nameSection: "home", nameIcon: "homeOutlined" },
    { nameSection: "statistics", nameIcon: "trending_up" },
    { nameSection: "mail", nameIcon: "mail" },
    { nameSection: "profile", nameIcon: "person" },
  ];

  const [footerMenu, setFooterMenu] = useState("profile");

  const actionClick = (event) => {
    console.log(event.target.id);
    setFooterMenu(event.target.id);
  };
  return (
    <ContainAll>
      <ContainAvatar>
        <Avatar src="https://media.licdn.com/dms/image/v2/D4E03AQEss2fe_t93pg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696795669281?e=1729728000&v=beta&t=1-Os_ngPTfCWcwPvmf5D2eJG6hestpdde76wP3FtSs0" />
        <ContainText>
          <TitleName> Jesus Alvarez</TitleName>
          <TitleJob> Desarrollador Front-End</TitleJob>
        </ContainText>
      </ContainAvatar>
      <ContainBody>
        {footerMenu === "profile" &&
          <>
            <ContainSubMenu>
              {category.map((line, index) => {
                return (
                  <ArrowIconHook
                    item={line.nameSection}
                    icon={line.nameIcon}
                    key={index}
                  />
                );
              })}
            </ContainSubMenu>
            <ContainSubMenu>
              {ConfigurationCategory.map((line, index) => {
                return (
                  <ArrowIconHook
                    item={line.nameSection}
                    icon={line.nameIcon}
                    key={index}
                  />
                );
              })}
            </ContainSubMenu>
          </>
        }
      </ContainBody>
      <ContainIcons>
        {bottomMenu.map((item) => {
          return (
            <IconsHook
              style={{ border: "1px solid red" }}
              icon={item.nameIcon}
              key={item.nameSection}
              nameSection={item.nameSection}
              state={footerMenu}
              onClick={actionClick}
            />
          );
        })}
      </ContainIcons>
    </ContainAll>
  );
};

export default MobileNavigation;
