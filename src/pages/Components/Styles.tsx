import styled from "styled-components";

import { FiUser, FiMail, FiLock } from "react-icons/fi";


export const LogoStyle = styled.img`
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 18%;
  width: 100px;
  height: 38px;
`;

export const LoginHeaderStyle = styled.h1`
  font-family: "Ubuntu Light";
  font-size: 32px;
  text-align: center;
  color: #e83f5b;
  margin-bottom: 30px;
`;
export const LogoFooterStyle = styled.img`
  fill: #fff;
  height: 30px;
  margin-top: 60px;
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
export const FiMailS = styled(FiMail)`
  position: absolute;
  display: flex;
  margin-left: 8px;
  margin-top: 10px;
`;
export const FiUserS = styled(FiUser)`
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
export const FormStyle = styled.form`
  width: 300px;
  margin: auto;
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
export const Message = styled("p")`
  /* font-weight: bold; */
  color: white;
  font-family: "Ubuntu light";
  text-align: center;
  width: 240px;
  justify-content: center;
  text-align: center;
  margin: auto auto 35px;

`;
export const GuestPanel = styled("div")`
  position: relative;
  padding-top: 55%;
  min-height: 100%;
  min-width: 300px;
  background-color: #E83F5B;

`;
export const Header = styled("header")`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 270px;
  background-color:#E83F5B;
`;
export const FooterStyle = styled("footer")`
  width: 100%;
  height: 150px;
  background-color:#E83F5B;
  top: 100%;
  position: relative;
  text-align: center;
  display: flexbox;
  justify-content: center;


`;
export const LinkContainer = styled("div")`
  width: 400px;
  height: 150px;
`;

export const LinkStyle  = styled("a")`
  color: white;
  font-family: Ubuntu;
  text-align: left;
  display: block;
  margin-bottom: 5px;
  margin-top: 10px;
  text-decoration: none;
`;