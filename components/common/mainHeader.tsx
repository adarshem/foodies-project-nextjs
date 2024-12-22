import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import classes from './mainHeader.module.css';

export default function MainHeader(): React.JSX.Element {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img src={logoImg.src} alt={'A plate with food on it'} />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href={'/meals'}>Meals</Link>
          </li>
          <li>
            <Link href={'/community'}>Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
