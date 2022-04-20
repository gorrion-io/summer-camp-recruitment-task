import { collectAssets } from 'next/dist/build/webpack/plugins/middleware-plugin';
import classes from './Layout.module.css';
import Link from 'next/link';

const Layout = (props: any) => {
  return (
    <main className={classes.usercontainer}>
      <header className={classes.header}>
        <h1>
          <a style={{ color: '#6d6ef6' }} href='https://gorrion.io'>
            Gorrion{' '}
          </a>
          Summer Camp 2022
        </h1>
        <Link href='/'>
          <button>Home Page</button>
        </Link>
      </header>
      <h2 className={classes.describe}>Users list: </h2>
      {props.children}
    </main>
  );
};

export default Layout;
