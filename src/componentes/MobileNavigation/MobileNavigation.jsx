import React from "react";
import {
  Avatar,
  ContainAll,
  ContainAvatar,
  ContainBody,
  ContainIcons,
  ContainText,
  TitleJob,
  TitleName,
} from "./Styled";
import ArrowIconHook from "./ArrowIconHook";

const MobileNavigation = () => {
  const category = [
    { nameSection: "Personal data", nameIcon: "people" },
    { nameSection: "Messages", nameIcon: "mail" },
    { nameSection: "Notifications", nameIcon: "notifications" },
    { nameSection: "Location", nameIcon: "place" },
    { nameSection: "Community", nameIcon: "groups" },
  ];

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
        {category.map((line, index) => {
          return <ArrowIconHook item={line.nameSection} icon={line.nameIcon} key={index} />;
        })}
      </ContainBody>
      <ContainIcons />
    </ContainAll>
  );
};

export default MobileNavigation;
