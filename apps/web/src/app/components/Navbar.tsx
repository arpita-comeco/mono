'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        <div style={styles.logo}>
          <img style={styles.logo} alt='next-logo'
            src={'data:image/png;base64,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'}/>
        </div>
        <ul style={{ ...styles.navbarList, ...(showMenu ? styles.show : {}) }}>
          <li style={styles.navbarItem}>
            <Link href="/">
              <button>Home</button>
            </Link>
          </li>
          <li style={styles.navbarItem}>
            <Link href="/about">
              <button>About Us</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#007bff',
    padding: '10px 20px',
    marginBottom: '2rem',
  },
  navbarContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    width: '30px',
    height: '30px',
    borderRadius: '50%'
  },
  navbarList: {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  navbarItem: {
    marginRight: '10px',
  },
  /* Responsive styles */
  '@media screen and (max-width: 768px)': {
    navbarList: {
      display: 'none', /* Hide navbar items by default */
      flexDirection: 'column',
      backgroundColor: '#007bff',
      position: 'absolute',
      top: '100%', /* Position below the menu button */
      left: 0,
      right: 0,
      padding: '10px',
    },
    navbarItem: {
      margin: '5px 0', /* Add space between navbar items */
    },
    show: {
      display: 'flex', /* Show navbar items when menu is toggled */
    },
  },
};

export default Navbar;
