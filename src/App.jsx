import { useState } from "react";

import ContactUs from "./ContactUs";
import AbountUs from "./AbountUs";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";
import MainContant from "./MainContant";

function App() {

  return (
    <>
      <MainContant />
      <Header />
      <Products />
      <AbountUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
