import React from "react";
import Header from "../components/Header";

const Home = ()=>{
    return(
        <div>
            <Header whichPage = {"/"} navigateTo="/"/>
            <h1>Home page</h1>
        </div>
    )
}

export default Home