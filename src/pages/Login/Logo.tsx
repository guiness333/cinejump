import React from 'react';
import { LogoStyle } from './loginStyle';
import logo  from '../../assets/Logo-red.svg';

export const Logo = () => {
    return (
        <LogoStyle src={logo} ></LogoStyle>
    )
}