// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navItems}>
        <li style={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#f0f0f0",
    padding: '1rem',
  },
  navItems: {
    display: 'flex',
    listStyleType: 'none',
  },
  navItem: {
    marginRight: '2rem',
  },
};

export default Navbar;
