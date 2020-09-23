import styled from 'styled-components';
import {ReactComponent as Logo} from '../../assets/Logo-red.svg';
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
export const LogoFooterStyle = styled(Logo)`
  fill: #fff;
  height: 30px;
  margin-top: 60px;
`;