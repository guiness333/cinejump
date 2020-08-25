import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from 'react-icons/ri';

export const LogoStyle = styled.img`
  display: block;
  margin: 8% auto;
  width: 80px;
  height: 38px;
`;

export const LoginHeaderStyle = styled.h1`
  font-family: "Ubuntu Light";
  font-size: 32px;
  padding-top: 30px;
  text-align: center;
  color: #e83f5b;
  margin-bottom: 30px;
`;

export interface InputProps {
  placeholder: string;
  name?: string;
}


export const InputFormStyle = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
  type: props.type,
}))`
  margin: auto auto 10px auto;
  font-size: 18px;
  height: 40px;
  width: 300px;
  border: 1px solid #EFEFEF;
  border-radius: 8px;
  background-color: #EFEFEF;
  padding-left: 35px;
`;
export const AiOutlineMailS = styled(AiOutlineMail)`
    position: absolute;
    display: flex;
    margin-left: 8px;
    margin-top: 10px;
`
export const RiLockPasswordLineS = styled(RiLockPasswordLine)`
    position: absolute;
    display: flex;
    margin-left: 8px;
    margin-top: 10px;
`
export const FormStyle = styled.form`
  width: 300px;
  margin: auto;
`
export const ButtonStyle = styled.button`
  position: relative;
  margin-top: 10px;
  margin-left: 18%;
  width: 200px;
  height: 35px;
  border-radius: 45px;
  border: 1px solid #e83f5b;
  background-color: #e83f5b;
  color: white;
  font-size: 14px;
  font-family: 'Ubuntu'
`