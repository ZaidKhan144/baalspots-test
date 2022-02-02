import React, { useState, useEffect } from "react";
import { getLCP, getFID, getCLS } from "web-vitals";

import "./App.scss";

import Header from "./layout/Header";
import Section1 from "./layout/Section1";
import Section2 from "./layout/Section2";
import Loading from "./layout/Loading";

if (typeof window !== "undefined") {
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);

  const Axe = require("@axe-core/react");
  Axe(React, 1000);
}

const App = () => {
  const [loading, setLoading] = useState(true);
  const [ mobileWidth, setMobileWidth ] = useState(window.innerWidth < 1025)

  const updateDimensions = () => {
    let mobileWidth = window.innerWidth < 1025
    setMobileWidth(mobileWidth)
  }

  useEffect(() => {

    updateDimensions();

    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])
  

  if (loading) {
    return (
      <Loading setLoading={setLoading}/>
    )
  } else {
    return (
      <div className="App">
        <Header mobileWidth={mobileWidth} />
        <main role="main">
          <Section1 mobileWidth={mobileWidth} />
          <Section2 mobileWidth={mobileWidth} />
        </main>
      </div>
    );
  }
}

export default App;
