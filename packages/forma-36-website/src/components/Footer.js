import React from 'react';
import Container from './Container';
import './Footer.css';

const Footer = ({ children }) => (
  <div className="footer">
    <Container>
      <div className="center">{children}</div>
    </Container>
  </div>
);
export default Footer;
