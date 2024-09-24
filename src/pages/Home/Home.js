import React, { useState } from "react";
import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import TabOptions from "../../components/common/TabOptions/TabOptions";
import Delivery from "../../components/delivery/Delivery";
import DiningOut from "../../components/diningOut/DiningOut"
import NightLife from "../../components/nightLife/NightLife";

function Home() {
  const [activeTab, setActiveTab] = useState("Delivery");

  const getCorrectScreen = (tab) => {
    switch(tab) {
        case "Delivery":
            return <Delivery />
        case "Dining Out":
            return  <DiningOut />
        case "Nightlife":
            return <NightLife />
        default:
            return <Delivery />
    }
  }

  return (
    <>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </>
  );
}

export default Home;
