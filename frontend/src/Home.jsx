// Home.js
import React from "react";
import Layout from "./Layout";
import Broadcast from "./broadcast/Broadcast";
import Headsection from "./headSection/Headsection";
import CryptoData from "./cryptoData/CryptoData";
import Services from "./services/Services";
import Help from "./help/Help";
import RiskWarning from "./Risk/Risk";

const Home = () => {
  return (
    <Layout>
      <div className="App">
        <Broadcast />
        <Headsection />
        <CryptoData />
        <Services />
        <Help />
        <RiskWarning />
      </div>
    </Layout>
  );
};

export default Home;
