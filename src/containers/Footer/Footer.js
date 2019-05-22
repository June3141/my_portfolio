import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <footer className="Footer-display">
        <p>
          this is footer.
        </p>

        <div>
          <a href="#" className="btn-social-long-twitter" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter"></i> <span>Follow Me</span>
          </a>

          <a href="#" className="btn-social-long-facebook" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook"></i> <span>Follow Me</span>
          </a>

          <a href="#" className="btn-social-long-insta" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i> <span>Follow Me</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
