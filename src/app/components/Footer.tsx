// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      <ul style={styles.footerLinks}>
        <li style={styles.footerLink}>
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
        <li style={styles.footerLink}>
          <a href="/terms-of-service">Terms of Service</a>
        </li>
        <li style={styles.footerLink}>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {  // Define styles type
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: 0,
  },
  footerLink: {
    marginRight: '1.5rem',
  },
};

export default Footer;
