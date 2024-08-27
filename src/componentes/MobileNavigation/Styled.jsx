import styled from "styled-components";

const ContainAll = styled.section`
  box-sizing: border-box;
  /* border: 4px solid red; */
  display: grid;
  height: 100vh;
  grid-template-rows: 120px auto 70px;
  padding: 0px 16px 0px 16px;

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
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 98px auto;
  /* padding: 24px 0px; */
  align-items: center;
`;
const Avatar = styled.img`
  width: 80px;
  height: 80px;
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
  font-size: 20px;
  font-weight: 600;
`;
const TitleJob = styled.p`
  /* border: 1px solid gray; */
  font-size: 16px;
  font-weight: 600;
  color: #313030c8;
`;

const ContainBody = styled.article`
  /* border: 1px solid green; */
`;

const ContainSubMenu = styled.section`
  border-top: 1px solid #83838397;
  padding: 16px 0px;
`;
const ContainIcons = styled.article`
  display: flex;
  /* grid-template-columns: repeat(4,1fr); */
  justify-content: space-between;
  align-items: center;
`;

const ContainIconsHook = styled.div`
.active{
  color: #1e72e1eb;
}
/* .desactive{
  color: #7a7a7aa9;
} */
`



export {
  ContainAll,
  ContainAvatar,
  Avatar,
  ContainBody,
  ContainSubMenu,
  ContainIcons,
  ContainIconsHook,
  ContainText,
  TitleName,
  TitleJob,
};
