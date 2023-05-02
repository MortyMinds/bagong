import React from "react";
import "./footer.css"

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>&copy; {currentYear} LongLongLiveTheKing. All rights reserved.</p>
      <nav className="footerNav">
        <ul>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;