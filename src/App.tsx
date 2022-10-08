import React, { useState } from "react";
import Footer from "./components/Footer";
import CrossroadSelect from "./components/Select";
import Header from "./components/Header";

import "./App.css";
import { CrossRoadsList, CrossRoadType } from "./data/types";
import Container from "./components/Container";

const App: React.FC = () => {
  const [type, setType] = useState<CrossRoadType>("simple");

  return (
    <>
      <Header />
      <main>
        <CrossroadSelect
          options={CrossRoadsList}
          value={type}
          setValue={setType}
        />
        <Container crossroadType={type} />
      </main>
      <Footer />
    </>
  );
};

export default App;
