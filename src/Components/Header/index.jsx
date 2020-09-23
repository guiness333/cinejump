import { Header, Menu, Item, Icon, LogoStyle, LinkStyle, UserIcon, SearchIcon } from "./styles";
import React from "react";

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
            <UserIcon fill="#FFF" size={20}/>
          </LinkStyle>
        </Item>
        <Item>
          <LinkStyle href="/">
            <SearchIcon fill="#FFF" size={20}/>
          </LinkStyle>
        </Item>
      </Menu>
    </Header>
  );
};
export default HeaderC;