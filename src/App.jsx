import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
import Body from "./components/Body.jsx";

function App() {
  const [items, setItems] = useState([]);

  // Load from LocalStorage when app starts
  useEffect(() => {
    const savedItems = localStorage.getItem("todo-items");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  // Save to LocalStorage whenever items change
  useEffect(() => {
    localStorage.setItem("todo-items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <Body items={items} setItems={setItems} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
