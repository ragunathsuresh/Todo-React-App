import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
import Body from "./components/Body.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
