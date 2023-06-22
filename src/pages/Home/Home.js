import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React from "react";

function Home() {
    return (
        <div>
            <Header/>
            <div style={{textAlign: "center"}}>
                <img style={{maxWidth: "100%", height: "auto"}}
                     src="https://cdn.dribbble.com/users/1107367/screenshots/5521980/pickle.gif" alt="iAmIn"/>
            </div>
            <Footer/>
        </div>
    )
}


export default Home;