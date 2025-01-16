import { useState } from "react";

import ContactUs from "./ContactUs";
import AbountUs from "./AbountUs";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header/>
      <AbountUs />
      <ContactUs />
    </>
  );
}

export default App;
