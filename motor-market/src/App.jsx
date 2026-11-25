import {useState} from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {


  const [favorites,setFavotes] = useState([]);
  const [cars, setCars] = useState([]);
  const [filter,setFilter] = useState("all");

  function toggleFavorite(id){
    if(favorites.includes(id)){
      setFavotes(favorites.filter(item => item != id));
    }
    else{
      setFavotes([...favorites,id]);
    }
  }
  return (
    <div className="app-shell">
      <Header favoriteCount={favorites.length}/>
      <Main 
      favorites={favorites}
      toggleFavorite={toggleFavorite}
      />
      <Footer />
    </div>
  );
}
