import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import "./index.css"


function Body() {
  return (
      <div>
          <img src="https://cdn.dribbble.com/users/1107367/screenshots/5521980/pickle.gif" alt="iAmIn"/>
      </div>
  );
}

function Home() {
    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

function About() {
   return (
        <div>
            <Header/>
            <Footer/>
        </div>
    )
}

function Search() {
   return (
        <div>
            <Header/>
            <Footer/>
        </div>
    )
}
function Apply() {
   return (
        <div>
            <Header/>
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
            <Route exact path="/" element={Home()} />
            <Route path="/about" element={About()} />
            <Route path="/search" element={Search()} />
            <Route path="/apply" element={Apply()} />
            <Route path="/people" element={People()} />
        </Routes>
    </Router>

  );
}

ReactDOM.createRoot(
    document.getElementById('root')
).render(<App />);
