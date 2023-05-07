import React from "react";
import Header from "./Header/Header";
import OurChef from "./OurChef/OurChef";
import YtSection from "./YtSection/YtSection";

const Home = () => {
  return (
    <div className="bg-cyan-50">
      <Header></Header>
      <OurChef></OurChef>
      <YtSection />
    </div>
  );
};

export default Home;
