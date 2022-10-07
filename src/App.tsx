import React, { useState } from "react";
import Footer from "./components/Footer";
import CrossroadSelect from "./components/Select";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App: React.FC = () => {
  const types: Array<string> = ["Simple", "T-type"];
  const [type, setType] = useState("simple");

  return (
    <>
      <Header />
      <main>
        <CrossroadSelect options={types} value={type} setValue={setType} />
      </main>
      <Footer />
    </>
  );
};

export default App;
