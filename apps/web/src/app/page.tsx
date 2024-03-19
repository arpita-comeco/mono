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
              Welcome web - Powered by Next JS 👋
            </h1>
            {/*<Greeting name='from Next JS' target='web' />*/}
            <Link href="/all-users">
              <button style={buttonStyle}>All Users</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


const buttonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: '#007bff', // Button color
  color: '#fff', // Text color
  textDecoration: 'none',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '15px',
  marginRight: '10px' // Just an example, you can adjust this as needed
};
