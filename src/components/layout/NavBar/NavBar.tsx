import Logo from '../../atoms/logo/Logo';
import * as S from './NavBar.styles';

export interface INavBarProps {}

export default function NavBar(props: INavBarProps) {
  return (
    <S.NavBar>
      <Logo />
    </S.NavBar>
  );
}
