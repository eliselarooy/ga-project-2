import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="content has-text-centered">
        <p>
          Created by Edward Foulds
          <a
            href="https://github.com/FouldsEJ"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
          </a>
          and Elise La Rooy
          <a
            href="https://github.com/eliselarooy"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
