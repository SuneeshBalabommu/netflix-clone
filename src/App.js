import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import{BrowserRouter as Router,Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
        <Route exact path='/' element={<HomeScreen></HomeScreen>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
