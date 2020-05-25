import React from 'react';
import './App.css'
import  Carousel from "./CaroComps/Carousel";

function App() {

  const slides = [
    "https://picsum.photos/id/237/200/300", 
    "https://picsum.photos/seed/picsum/200/300",
    "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
    "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
    
  ];
  return (
    <div className="container">
   <Carousel slides={slides} />
    </div>
  );
}

export default App;
