import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="content has-text-centered">
        <p>
          Created by Edward and Elise. Open in{' '}
          <a href="https://github.com/eliselarooy/ga-project-2">
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
            <span>Github.</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
