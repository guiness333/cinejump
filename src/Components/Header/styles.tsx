import styled from 'styled-components';
import {ReactComponent as Logo} from '../../assets/Logo-red.svg';

import {FiSearch} from  "react-icons/fi";
import {FaRegUserCircle} from "react-icons/fa";
export const Header = styled("header")`
    width: 100%;
    height: 100px;
    display: flex;
`;
export const Menu = styled("ul")`
    display: inline-block;
    margin: auto;
`;
export const Item = styled("li")`
    margin-right: 20px;
    display: inline-block;
    color: white;
`;
export const SearchIcon = styled(FiSearch)`
    size: 0;
`;
export const UserIcon = styled(FaRegUserCircle)`
    size: 0;
`;
export const LogoStyle = styled(Logo)`
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 18%;
  width: 100px;
  height: 38px;
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