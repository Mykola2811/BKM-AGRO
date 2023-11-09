
import { Tell } from '../../assets/svgComponents/Tell';
import { Logo } from '../../assets/svgComponents/Logo';
import css from './styles.module.scss';

export const Header = () => {
  return <div className={css.header}>
    <div className={css.tellFlex}>
      <Tell />
      <p>+3809843559874</p>
    </div>
    <Logo />
  </div>
}
