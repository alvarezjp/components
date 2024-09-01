import styled from "styled-components";

const Container = styled.section`
  display: flex;
  border: 1px solid green;
  justify-content: center;
  align-items: center;

  /* display: grid;
  grid-template-columns: 50% 20%; */
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background: radial-gradient(
      at 1.7206629630172277% 14.189913344723237%,
      hsla(153.58695652173913, 92.00000000000001%, 60.7843137254902%, 1) 0%,
      hsla(153.58695652173913, 92.00000000000001%, 60.7843137254902%, 0) 100%
    ),
    radial-gradient(
      at 66.12643340495433% 26.773198783683117%,
      hsla(200.47058823529412, 100%, 50%, 1) 0%,
      hsla(200.47058823529412, 100%, 50%, 0) 100%
    ),
    radial-gradient(
      at 63.03383416154076% 51.83536674953611%,
      hsla(321.88235294117646, 100%, 50%, 1) 0%,
      hsla(321.88235294117646, 100%, 50%, 0) 100%
    ),
    radial-gradient(
      at 76.70197000183883% 53.98620465459851%,
      hsla(33.58695652173913, 92.00000000000001%, 60.7843137254902%, 1) 0%,
      hsla(33.58695652173913, 92.00000000000001%, 60.7843137254902%, 0) 100%
    ),
    radial-gradient(
      at 64.99806347912899% 69.12815600582786%,
      hsla(153.58695652173913, 92.00000000000001%, 60.7843137254902%, 1) 0%,
      hsla(153.58695652173913, 92.00000000000001%, 60.7843137254902%, 0) 100%
    ),
    radial-gradient(
      at 61.89680054306068% 3.5470035982506087%,
      hsla(200.47058823529412, 100%, 50%, 1) 0%,
      hsla(200.47058823529412, 100%, 50%, 0) 100%
    ),
    radial-gradient(
      at 57.88816162579072% 97.97711375964238%,
      hsla(321.88235294117646, 100%, 50%, 1) 0%,
      hsla(321.88235294117646, 100%, 50%, 0) 100%
    ),
    radial-gradient(
      at 75.06049803747497% 30.850436717764563%,
      hsla(33.58695652173913, 92.00000000000001%, 60.7843137254902%, 1) 0%,
      hsla(33.58695652173913, 92.00000000000001%, 60.7843137254902%, 0) 100%
    );
`;

const ContainForm = styled.article`
  border: 1px solid red;
  width: 70%;
  height: 90%;
  background-color: #f9f4f4fa;
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 50px;
  box-sizing: border-box;
  border: 3px solid blue;
  .inputText {
    border: 1px solid red;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

const ContainChecks = styled.div`
  /* border: 1px solid black; */
  display: flex;
  /* justify-content: space-between; */
  gap: 20px;
`;
const SubText = styled.p`
  font-size: 20px;
  color: #000000a6;
  font-weight: 500;
`;

const InputChecks = styled.input`
  border: 60px solid purple;
  border-radius: 500px;
`;

export {
  Container,
  ContainForm,
  Form,
  Title,
  ContainChecks,
  SubText,
  InputChecks,
};
