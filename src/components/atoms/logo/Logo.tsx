import * as React from 'react';
import * as S from './Logo.styles'
import logo from '../../../assets/Images/logo.svg'

export interface ILogoProps {
}

export default function Logo (props: ILogoProps) {
  return (
    <S.LogoContainer>
        <S.LogoImage src={logo} />
        <S.LogoTitle>Stacks</S.LogoTitle>
    </S.LogoContainer>
  );
}
