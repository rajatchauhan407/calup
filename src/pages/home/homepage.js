import React from "react";
import styles from "./homepage.module.css";
import HomefeedCard from "../../components/cards/homefeed-card";

function Home(){
    return (
        <>
            <HomefeedCard />
            <HomefeedCard />
            <HomefeedCard />
        </>
    );
}
export default Home;
