import styled from "styled-components";

export const Button = styled.button`
    width: 200px;
    height: 45px;
    border-radius: 4px;
    position: absolute;
    top : 72%;
    left: 20%;
    color: white;   
    border:none;
    background-color: green;
    border-radius: 4px;
`

export const Box = styled.div`
    width:360px;
    height: 640px;
    left: 37.5%;
    right: 37.5%;
    top: 18.75%;
    bottom: 18.75%;
    position: absolute;
    background: #F2F2F2;
    display: flex;
    flex-direction:column;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.12);
    
`

export const Retangulo = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width:360px;
    height: 56px;   
    left: 0%;
    right: 0%;
    top: 30%;
    bottom: 0%;

`

export const Form = styled.form`
    position: absolute;
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    height: 150px;
    left: 0%;
    right: 0%;
    top: 39%;
    bottom: 0%;
`

// export const Input = styled.input`
//     width:328px;
//     height: 56px;
//     margin-bottom:10px;
//     background: #c5c1c1;
// `