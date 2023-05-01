import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Shop from "./Components/Shop";

function App() {
  return (
    <Router>
        <div>
          <Navbar />
          <Routes>
              <Route exact path='/' component={Home} />
              <Route path='/shop' component={Shop} />
          </Routes>
        </div>
      </Router>
    );
}

export default App;
