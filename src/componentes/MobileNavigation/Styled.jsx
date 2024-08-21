import styled from "styled-components";

const ContainAll = styled.section`
  box-sizing: border-box;
  border: 1px solid red;
  display: grid;
  height: 100vh;
  grid-template-rows: 92px auto 60px;
  padding-left: 24px;

  & > :nth-child(1) {
    grid-row: 1;
  }
  & > :nth-child(2) {
    grid-row: 2;
  }
  & > :nth-child(3) {
    grid-row: 3;
  }
`;

const ContainAvatar = styled.article`
  /* border: 1px solid blue; */
  display: grid;
  grid-template-columns: 68px auto;
  align-items: center;
  box-sizing: border-box;

`;
const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30%;
`;

const ContainText = styled.div`
  /* border: 1px solid pink; */
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TitleName = styled.p`
  /* border: 1px solid black; */
  font-size: 16px;
  font-weight: 600;
`;
const TitleJob = styled.p`
  /* border: 1px solid gray; */
  font-size: 12px;
  font-weight: 600;
  color: #313030c8;
`;

const ContainBody = styled.article`
  border: 1px solid green;
`;

const ContainIcons = styled.article`
  border: 1px solid purple;
`;

export {
  ContainAll,
  ContainAvatar,
  Avatar,
  ContainBody,
  ContainIcons,
  ContainText,
  TitleName,
  TitleJob,
};
