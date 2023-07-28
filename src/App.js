import './App.css';
import React, {useState} from 'react';
import Programowanie from "./pages/programowanie"
import Bazy from "./pages/bazy"
import Systemy from "./pages/systemy"
import Sieci from "./pages/sieci"
import Grafika from "./pages/grafika"
import Navbar from "./Navbar"

function App() {
  let component = new Array();
  switch (window.location.pathname) {
    case "/":
      component = <Bazy />
      break
    case "/grafika":
      component = <Grafika />
      break
    case "/programowanie":
      component = <Programowanie />
      break
    case "/sieci":
      component = <Sieci />
      break
    case "/systemy":
      component = <Systemy />
      break
  }
  return (
    <>
    <Navbar />
    <div className="container">{component}</div>
    </>
  );
};

export default App;
