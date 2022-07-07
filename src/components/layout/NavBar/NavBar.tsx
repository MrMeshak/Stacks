import * as React from 'react';
import styled from 'styled-components'
import * as S from './NavBar.styles'
import Logo from '../../atoms/logo/Logo';

export interface INavBarProps {
}

export default function NavBar (props: INavBarProps) {
  return (
    <S.NavBar>
        <Logo/>
    </S.NavBar>
  );
}

