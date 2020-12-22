import {
  Header,
  Menu,
  Item,
  LogoStyle,
  LinkStyle,
  UserIcon,
  SearchIcon,
} from "./styles";
import React from "react";

export const HeaderC = () => {
  return (
    <Header data-testid="Header">
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
            <LogoStyle role="img" fill={"#FFF"} />
          </LinkStyle>
        </Item>
      </Menu>
      <Menu>
        <Item>
          <LinkStyle href="/">
            <SearchIcon role="img" size={20} />
          </LinkStyle>
        </Item>
        <Item>
          <LinkStyle href="/">
            <UserIcon role="img" fill="#FFF" size={20} />
          </LinkStyle>
        </Item>
      </Menu>
    </Header>
  );
};
export default HeaderC;
