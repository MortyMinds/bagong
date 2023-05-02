import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./pages/base/header/Header";
import Footer from "./pages/base/footer/Footer";
import "./index.css"
import data from "./data/data.json"
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const blurLayOut = {
    textAlign: "center",
    position: "fixed",
    top: "100px",
    bottom: "80px",
    left: "20px",
    right: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    zIndex: "9999",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "60px / 60px",
    fontFamily: "-apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', " +
        "'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};
const pStyle = {
    textAlign: "justify",
    textIndent: "2em",
    marginBottom: "1em",
    fontFamily: "Times New Roman",
    fontSize: "16px",
    lineHeight: "1.5",
    marginLeft: "50px",
    marginRight: "50px",
};

function Home() {
    return (
        <div>
            <Header/>
            <div>
                <img src="https://cdn.dribbble.com/users/1107367/screenshots/5521980/pickle.gif" alt="iAmIn"/>
            </div>
            <Footer/>
        </div>
    )
}

function About() {
    return (
        <div>
            <Header/>
            <div style={blurLayOut}>
                <h1 style={{fontFamily:"cursive"}}>Why Join The Navy If You Can Be A Pirate?</h1>
                <p style={pStyle}>
                    Imagine a platform where, after being laid off, you can search for job opportunities from&nbsp;
                    <i><a style={{color: "black"}} href="https://fortune.com/ranking/fortune500/">Fortune 500
                        companies</a></i>
                    &nbsp;in the United States and apply directly, eliminating the need for aimless wandering and the
                    negative
                    emotions of anxiety, sadness, and uncertainty. Let's face it, the most challenging part of the job
                    search process is often the time-consuming and repetitive task of filling out multiple applications
                    through systems like <b>Workday</b>, answering banal questions such as <b>"Are you over 18? Yes
                    No."</b>
                </p>
                <p style={pStyle}>
                    Wouldn't it be wonderful if there was a more meaningful and efficient way to connect qualified job
                    seekers with reputable employers?
                </p>
                <div>
                    <img style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "350px",
                    }} src="https://media.tenor.com/doUcitxR2acAAAAC/rick-and-morty-smirk.gif" alt="rickAgree"></img>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);
    const tableStyle = {
        textAlign: "center",
        borderCollapse: "collapse",
        border: "1px solid #ccc",
        margin: "auto",
        borderRadius: "5px",
        overflow: "auto",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
    };
    const inputStyle = {
        padding: '10px',
        borderRadius: '20px',
        border: '1px solid #ccc',
        fontSize: '16px',
        outline: 'none',
    }
    const thStyle = {
        textAlign: "center",
        border: '1px solid black',
        padding: '10px',
    };
    const tdStyle = {
        border: '1px solid black',
        padding: '10px',
        textAlign: 'center',
    };
    const trStyle = {
        backgroundColor: "#fff",
    };

    const hoveredTrStyle = {
        backgroundColor: "#f5f5f5",
    };
    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    return (
        <div>
            <Header/>
            <div style={blurLayOut}>
                <div style={{paddingTop: "5px"}}></div>
                <input style={inputStyle} type="text"
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                       placeholder="Search"
                />
                <div style={{paddingBottom: "5px"}}></div>
                <div style={{paddingLeft: "5px", paddingRight: "5px", height: "450px", overflow: "auto"}}>
                    <table style={tableStyle}>
                        <thead>
                        <tr>
                            <th style={thStyle}>Company</th>
                            <th style={thStyle}>Title</th>
                            <th style={thStyle}>Link</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredData.map((item, index) => (
                            <tr
                                key={`${item.company}-${index}`}
                                style={index === hoveredRowIndex ? hoveredTrStyle : trStyle}
                                onMouseEnter={() => setHoveredRowIndex(index)}
                                onMouseLeave={() => setHoveredRowIndex(-1)}>
                                <td style={tdStyle}>{item.company}</td>
                                <td style={tdStyle}>{item.title}</td>
                                <td style={tdStyle}><a href={item.link} target="_blank" rel="noreferrer">{item.link}</a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div style={{paddingTop: "5px", fontFamily:"cursive"}}>
                    Last Updated : 05-02-2023 <br/>
                    Happy Hunting
                </div>
            </div>
            <Footer/>
        </div>
    )
}

function Apply() {
    return (
        <div>
            <Header/>
            <div style={blurLayOut}>
                <h1 style={{textAlign:"center", paddingTop:"5px", fontFamily:"cursive"}}>Welcome To Secret Lab</h1>
                <p style={pStyle}>
                    Available companies:
                </p>
                <p style={pStyle}>
                    Adobe, Amex, Bestbuy, Capital-one, Chewy, Citi, Cisco, Comcast, Costco, Cvs, Discover,
                    Freddie-mac, Home-depot, Ibm, Lowe's, Schwab, Starbucks, T-mobile, Trade-desk, U.S bank,
                    Walgreens, Walmart, Workday. More companies will be onboard shortly.
                </p>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeaB1tgxA71Co5iEJBwF4p-HOOcU-qaSMk2ZjQjhgHJN6lJkg/viewform?embedded=true"
                    width="640" height="340" frameBorder="0" marginHeight="0" marginWidth="0">
                </iframe>
                <div style={{fontFamily:"cursive"}}>
                    Happy Hunting
                </div>
            </div>
            <Footer/>
        </div>
    )
}

function People() {
    return (
        <div>
            <Header/>
            <Footer/>
        </div>
    )
}

function App() {
    return (
        <Router basename="/bagong">
            <Routes>
                <Route exact path="/" element={Home()}/>
                <Route path="/about" element={About()}/>
                <Route path="/search" element={Search()}/>
                <Route path="/apply" element={Apply()}/>
                <Route path="/people" element={People()}/>
                <Route path='/terms-of-use' element={TermsOfUse()}/>
                <Route path='/privacy-policy' element={PrivacyPolicy()}/>
            </Routes>
        </Router>
    );
}

ReactDOM.createRoot(
    document.getElementById('root')
).render(<App/>);
