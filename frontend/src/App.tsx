import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Layout>
      <Navbar />
      <Home />
    </Layout>
  );
}

export default App;
