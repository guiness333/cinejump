import { Header, Menu, Item, Icon, LogoStyle, LinkStyle } from "./styles";
import React from "react";
import {FiSearch as SearchIcon} from  "react-icons/fi";
import {FaRegUserCircle as UserIcon} from "react-icons/fa";

export const HeaderC = () => {
  return (
    <Header>
      <Menu>
        <Item>
          <LinkStyle href="/">Filmes</LinkStyle>
        </Item>
        <Item>
          <LinkStyle href="/">Séries</LinkStyle>
        </Item>
      </Menu>
      <Menu>
        <Item>
          <LinkStyle href="/">
            <LogoStyle fill={"#FFF"} />
          </LinkStyle>
        </Item>
      </Menu>
      <Menu>
        <Item>
          <LinkStyle href="/">
            <Icon src={SearchIcon} />
          </LinkStyle>
        </Item>
        <Item>
          <LinkStyle href="/">
            <Icon src={UserIcon} />
          </LinkStyle>
        </Item>
      </Menu>
    </Header>
  );
};
export default HeaderC;