import React from 'react';
import {FooterStyle, LinkContainer, LogoFooterStyle, LinkStyle} from './styles';
export const Footer = () => {
    return (
      <FooterStyle>
        <LinkContainer>
          <LogoFooterStyle fill={'#FFF'}></LogoFooterStyle>
        </LinkContainer>
        <LinkContainer>
          <LinkStyle>Desenvolvido por Walber Richard</LinkStyle>
          <LinkStyle>Proposta do projeto</LinkStyle>
          <LinkStyle>Prototipo no Figma</LinkStyle>
          <LinkStyle>Apresentação ao comitê</LinkStyle>
          <LinkStyle>Documentação</LinkStyle>
        </LinkContainer>
      </FooterStyle>
    );
  };