import styled from 'styled-components';
import { FiMail, FiLock } from "react-icons/fi";

export const FormStyle = styled.form`
  width: 300px;
  margin: auto;
`;
export const FiMailS = styled(FiMail)`
  position: absolute;
  display: flex;
  margin-left: 8px;
  margin-top: 10px;
`;
export const FiLockS = styled(FiLock)`
  position: absolute;
  display: flex;
  margin-left: 8px;
  margin-top: 10px;
`;
export const InputFormStyle = styled.input.attrs((props) => ({
    placeholder: props.placeholder,
    type: props.type,
  }))`
    margin: auto auto 10px auto;
    font-size: 18px;
    height: 40px;
    width: 300px;
    border: 1px solid #efefef;
    border-radius: 8px;
    background-color: #efefef;
    padding-left: 35px;
  `;

export const ButtonStyle = styled("button")<{margem?: Number, borderColor?: String;backgroundColor?: String,textColor?: String;}>`
position: relative;
margin-top: 10px;
margin-left: ${(props) => Number(props.margem)}%;
width: 200px;
height: 35px;
border-radius: 45px;
border: 1px solid ${(props) => String(props.borderColor)};
background-color: ${(props) => String(props.backgroundColor)};
color: ${(props) => String(props.textColor)};
font-size: 14px;
font-family: "Ubuntu";
cursor: pointer; 
`;