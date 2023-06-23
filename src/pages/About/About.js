import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React from "react";
import '../Background.css';
import './About.css'

function About() {
    const companiesString = ['Bestbuy', 'Freddiemac', 'Korger', 'Paypal', 'Riteaid', 'Netflix', 'Flexport', 'Nvidia', 'Usbank', 'Ibm', 'CapitalOne', 'Costco', 'Ford', 'Servicenow', 'Asana', 'Smartsheet', 'Tradedesk', 'Ebay', 'Salesforce', 'Veeva', 'Discover', 'Boeing', 'Walmart', 'Snap', 'Homedepot', 'Bairesdev', 'Ups', 'Google', 'Chewy', 'Microsoft', 'Zillow', 'Uber', 'Walgreens', 'Workday', 'Comcast', 'Schwab', 'Amex', 'Honeywell', 'Cisco', 'Uipath', 'Att', 'Citi', 'Caterpillar', 'Statefarm', 'Adp', 'Humana', 'Expedia', 'Fidelity', "O'Reillyautoparts", 'Molinahealthcare', 'Lowes', 'Tiktok', 'Cvs', 'Databricks', 'Oracle', 'Chase', 'Docusign', 'Square', 'Starbucks', 'Geico', 'Apple', 'Datadog', 'Unitedhealth', 'Sap', 'Airbnb', 'Tmobile', 'Adobe', 'Meta']

        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join(', ');
    return (
        <div>
            <Header/>
            <div className="background">
                <div className="about-content">
                    <h1>Why Join The Navy If You Can Be A Pirate?</h1>
                    <p className="about-p">
                        Imagine a platform where, after being laid off, you can search for job opportunities from&nbsp;
                        <i><a style={{color: "black"}} href="https://fortune.com/ranking/fortune500/">Fortune 500
                            companies</a></i>
                        &nbsp;in the United States and apply directly, eliminating the need for aimless wandering and
                        the
                        negative emotions of anxiety, sadness, and uncertainty. Let's face it, the most challenging part
                        of
                        the job
                        search process is often the time-consuming and repetitive task of filling out multiple
                        applications
                        through systems like <b>Workday</b>, answering banal questions such as <b>"Are you over 18? Yes
                        No."</b>
                    </p>
                    <p className="about-p">
                        Wouldn't it be wonderful if there was a more meaningful and efficient way to connect qualified
                        job
                        seekers with reputable employers?
                    </p>
                    <p className="about-p">
                        Available Companies:
                        <br/>
                        <div className="about-p" style={{backgroundImage: 'linear-gradient(45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)'}}>
                            <b style={{color: "white"}}>
                                {companiesString}
                            </b>
                        </div>
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;