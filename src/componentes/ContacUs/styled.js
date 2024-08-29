import styled from "styled-components";

const Container = styled.section`
border: 5px solid red;
/* position: relative; */
display: grid;
grid-template-columns: repeat(2,80% 20%);
height: 100vh;
width: 100%;
box-sizing: border-box;
background-image: url("../../assets/ContactUs/alexander-andrews-JYGnB9gTCls-unsplash.jpg");
`

const Form = styled.form`
border: 5px solid green;
width: 100%;
height: 100%;
box-sizing: border-box;
z-index: 1;
`
const Map = styled.map`
border: 1px solid blue;
/* position: absolute; */
top: 0;
/* width: 100%;
height: 100%; */
z-index: 0;
`

export {
    Container,
    Form,
    Map
}