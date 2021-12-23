import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./layout/Layout";
import Routes from "./routes/Routes";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Routes />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
