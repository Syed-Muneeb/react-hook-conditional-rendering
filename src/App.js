import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./components/Footer";

function App() {
  let [page, setPage] = useState("Home");

  return (
    <div className="App">
      <Navbar page={page} setPage={setPage} />

      {page === "Home" && <Home />}
      {page === "About" && <About />}
      {page === "Contact" && <Contact />}
      {page === "Services" && <Services />}

      <Footer />
    </div>
  );
}

export default App;
