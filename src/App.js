import React, { useState, useEffect } from "react";
import { getLCP, getFID, getCLS } from "web-vitals";
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";

import "./App.scss";

import Header from "./layout/Header";
import Section1 from "./layout/Section1";
import Section2 from "./layout/Section2";

if (typeof window !== "undefined") {
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);

  const Axe = require("@axe-core/react");
  Axe(React, 1000);
}

const App = () => {
  return (
    <div className="App">
      <Header />
      <main role="main">
        <Section1 />
        <Section2 />
      </main>
    </div>
  );
}

export default App;
