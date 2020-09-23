import styled from 'styled-components';
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