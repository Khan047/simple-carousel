import React from 'react';
import './App.css'
import  Carousel from "./CaroComps/Carousel";

function App() {

  const slides = [
    "https://2ho4f5klzmi1xz49c18txd0p-wpengine.netdna-ssl.com/wp-content/uploads/ARTat-Berlin-Der-Mann-mit-dem-Goldhelm-Rembrandt-bzw-seinem-Kreis-zugeschrieben.jpg", 
    "https://upload.wikimedia.org/wikipedia/commons/7/73/Dor%C3%A9_%E2%80%94_Enigma_1871.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/bb/Sargent%2C_John_SInger_%281856-1925%29_-_Self-Portrait_1907_b.jpg",
    "https://www.telegraph.co.uk/content/dam/art/2015-07/july20/%C3%89douard-and-Marie-Louise-Pailleron-1.jpg?imwidth=450",
    
  ];
  return (
    <div className="container">
   <Carousel slides={slides} />
    </div>
  );
}

export default App;
