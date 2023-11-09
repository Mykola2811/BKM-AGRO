import { Wrapper } from './Header.styled';
import { Logo } from '../../assets/svgComponents/Logo';
import { Tell } from '../../assets/svgComponents/Tell';

export const Header = () => {
  return <Wrapper>
    <div>
      <Tell />
      <p>+3809843559874</p>
    </div>
    <Logo />
  </Wrapper>
}
