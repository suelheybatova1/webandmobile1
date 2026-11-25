import {useState} from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {


  const [favorites,setFavotes] = useState([]);
  const [cars, setCars] = useState([]);
  const [filter,setFilter] = useState([]);
  return (
    <div className="app-shell">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
