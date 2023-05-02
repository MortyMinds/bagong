import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <p>&copy; {currentYear} LongLongLiveTheKing. All rights reserved.</p>
            <nav className="footerNav">
                <ul>
                    <li><Link to="/terms-of-use" style={{color: "white"}}>Terms of Use</Link></li>
                    <li><Link to="/privacy-policy" style={{color: "white"}}>Privacy Policy</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Footer;