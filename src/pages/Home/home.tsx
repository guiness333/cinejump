import React from "react";

import logoWhite from "../../assets/Logo-white.svg";
import SearchIcon from "../../assets/FiSearch.svg";
import UserIcon from "../../assets/FaRegUserCircle.svg";
import { Container } from "../Components/LoginContainer";
import { HeaderBackground, Footer } from "../Components/Components";
import { Header, Menu, Item, Icon } from "./HeaderNav/headerNav";
import { LogoStyle, LinkStyle } from "../Components/Styles";

const Home = () => {
  return (
    <Container width="100%">
      <HeaderBackground />
      <Header>
        <Menu>
          <Item><LinkStyle href="/">Filmes</LinkStyle></Item>
          <Item><LinkStyle href="/">Séries</LinkStyle></Item>
        </Menu>
        <Menu>
          <Item>
            <LinkStyle href="/"><LogoStyle src={logoWhite} /></LinkStyle>
          </Item>
        </Menu>
        <Menu>
          <Item>
          <LinkStyle href="/"><Icon src={SearchIcon} /></LinkStyle>
          </Item>
          <Item>
          <LinkStyle href="/"><Icon src={UserIcon} /></LinkStyle>
          </Item>
        </Menu>
      </Header>
      <Footer />
    </Container>
  );
};

export default Home;
