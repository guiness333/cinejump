import React from "react";

import logoWhite from "../../assets/Logo-white.svg";
import SearchIcon from "../../assets/FiSearch.svg";
import UserIcon from "../../assets/FaRegUserCircle.svg";
import { Container } from "../Components/LoginContainer";
import { HeaderBackground, Footer } from "../Components/Components";
import { Header, Menu, Item, Icon } from "./HeaderNav/headerNav";
import { LogoStyle, LinkStyle } from "../Components/Styles";
import { MoviesRow, MovieItem, MoviesColumn } from "./Rows/rowContainer";
import backdrop from "../../assets/AmTfxc3S22z7WWC7KAR3SPs70Bl.jpg";

const Home = () => {
  return (
    <Container width="100%">
      <HeaderBackground />
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
      <MoviesRow>
        <MovieItem src={backdrop} width={718} height={328} align={"inline"} />
        <MoviesColumn>
          <MovieItem src={backdrop} width={270} height={159} align={"block"} />
          <MovieItem src={backdrop} width={270} height={159} align={"block"} />
        </MoviesColumn>
      </MoviesRow>
      <Footer />
    </Container>
  );
};

export default Home;
