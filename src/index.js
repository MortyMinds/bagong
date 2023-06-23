import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Puzzle from "./pages/Puzzle/Puzzle";
import About from "./pages/About/About";
import "./index.css"
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SearchJobs from "./pages/Search/Search";
import Home from "./pages/Home/Home";
import ApplyJobs from "./pages/Apply/Apply";

function App() {
    return (
        <Router basename="/bagong">
            <Routes>
                <Route exact path="/" element={Home()}/>
                <Route path="/about" element={About()}/>
                <Route path="/search" element={SearchJobs()}/>
                <Route path="/apply" element={ApplyJobs()}/>
                <Route path="/puzzle" element={Puzzle()}/>
                <Route path='/terms-of-use' element={TermsOfUse()}/>
                <Route path='/privacy-policy' element={PrivacyPolicy()}/>
            </Routes>
        </Router>
    );
}

ReactDOM.createRoot(
    document.getElementById('root')
).render(<App/>);
