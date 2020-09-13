import { Header, Menu, Item, Icon } from "../HeaderNav/headerNav";
import { LogoStyle, LinkStyle } from "../../Components/Styles";
import React from "react";
import logoWhite from "../../../assets/Logo-white.svg";
import SearchIcon from "../../../assets/FiSearch.svg";
import UserIcon from "../../../assets/FaRegUserCircle.svg";

const HeaderC = () => {
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
            <LogoStyle src={logoWhite} />
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