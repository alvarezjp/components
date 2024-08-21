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

const MobileNavigation = () => {
  return (
    <ContainAll>
      <ContainAvatar>
        <Avatar src="https://media.licdn.com/dms/image/v2/D4E03AQEss2fe_t93pg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696795669281?e=1729728000&v=beta&t=1-Os_ngPTfCWcwPvmf5D2eJG6hestpdde76wP3FtSs0"/>
        <ContainText>
          <TitleName> Jesus Alvarez</TitleName>
          <TitleJob> Desarrollador Front-End</TitleJob>
        </ContainText>
      </ContainAvatar>
      <ContainBody />
      <ContainIcons />
    </ContainAll>
  );
};

export default MobileNavigation;
