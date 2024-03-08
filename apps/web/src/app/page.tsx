import styles from './page.module.scss';
// import Greeting from '@common/components/Greeting';
import Link from 'next/link';

export default function Index() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome web 👋
            </h1>
            {/*<Greeting name='from Next JS' target='web' />*/}
            <Link href="/all-users">
              <a>All Users</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
