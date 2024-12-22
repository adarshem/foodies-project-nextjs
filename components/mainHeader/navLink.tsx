'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './styles/navLink.module.css';

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): React.JSX.Element {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path?.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
