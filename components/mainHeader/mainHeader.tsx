import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';
import classes from './styles/mainHeader.module.css';
import MainHeaderBackground from './mainHeaderBackground';
import NavLink from './navLink';

export default function MainHeader(): React.JSX.Element {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt={'A plate with food on it'} priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={'/meals'}>Meals</NavLink>
            </li>
            <li>
              <NavLink href={'/community'}>Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
