import {
  Header,
  Menu,
  Item,
  LogoStyle,
  LinkStyle,
  UserIcon,
} from "./styles";
import React from "react";
import { useAuth } from "../../domains/Auth/Hooks";

export const HeaderC = () => {
  const { logout } = useAuth();


  return (
    <Header data-testid="Header">
      <Menu>
        <Item>
          <LinkStyle href="/home">Filmes</LinkStyle>
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
          <LinkStyle href="/" onClick={logout}>
            <UserIcon role="img" fill="#FFF" size={20} />
          </LinkStyle>
        </Item>
      </Menu>
    </Header>
  );
};
export default HeaderC;
