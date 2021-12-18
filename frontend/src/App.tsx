import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Navbar />
      <Slider />
    </Layout>
  );
}

export default App;
