import React from 'react';
import {FooterStyle, LinkContainer, LogoFooterStyle, LinkStyle} from './styles';
export const Footer = () => {
    return (
      <FooterStyle>
        <LinkContainer>
          <LogoFooterStyle fill={'#FFF'}></LogoFooterStyle>
        </LinkContainer>
        <LinkContainer>
          <LinkStyle href="https://github.com/guiness333">Desenvolvido por Walber Richard</LinkStyle>
          <LinkStyle href="https://classroom.google.com/c/MTQyNzM0ODMyOTE1/m/MTYwMTAyNTUyMjc3/details">Proposta do projeto</LinkStyle>
          <LinkStyle href="https://www.figma.com/file/um4dcEJCOlEvB6kCe9KCOD/Cinejump?node-id=0%3A1">Prototipo no Figma</LinkStyle>
          <LinkStyle href="https://docs.google.com/presentation/d/1P8Qv29PMoa56701fNH5g-w9z1vjFtOLaiLPqJwXTNt0/edit?usp=sharing">Apresentação ao comitê</LinkStyle>
          <LinkStyle href="https://github.com/guiness333/cinejump">Documentação</LinkStyle>
        </LinkContainer>
      </FooterStyle>
    );
  };