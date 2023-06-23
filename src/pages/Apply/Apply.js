import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React from "react";
import {Link} from 'react-router-dom';
import "../Background.css"
import "./Apply.css"

function ApplyJobs() {
    const applyCompanyString = ['Bestbuy', 'Freddiemac', 'Riteaid', 'Usbank', 'Ibm', 'Costco', 'Tradedesk', 'Discover', 'Walmart', 'Homedepot', 'Chewy', 'Zillow', 'Walgreens', 'Workday', 'Comcast', 'Schwab', 'Amex', 'Cisco', 'Citi', 'Humana', 'Fidelity', 'Lowes', 'Tiktok', 'Cvs', 'Capitalone', 'Starbucks', 'Tmobile', 'Adobe']

        .sort((a, b) => (a.toLowerCase().localeCompare(b.toLowerCase()))).join(', ');
    return (
        <div>
            <Header/>
            <div className="background">
                <h1>Welcome To Secret Lab</h1>
                <h2>
                    Available companies:
                </h2>
                <p className="apply-p" style={{
                    backgroundImage: 'linear-gradient(45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)',
                    color: "white"
                }}>
                    {applyCompanyString}
                </p>
                <p>
                    More companies will be onboard shortly.
                </p>
                <div className="link-container">
                    <Link to="/puzzle">Magic Link</Link>
                </div>
                <div style={{fontFamily: "cursive"}}>
                    Happy Hunting
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default ApplyJobs;