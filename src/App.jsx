import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
import Body from "./components/Body.jsx";

function App() {
  const APIURL = "http://localhost:3001/items";
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(APIURL);
        console.log(response);

        const data = await response.json();
        console.log("Fetched data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <Body />
      </main>
      <Footer />
    </div>
  );
}

export default App;
