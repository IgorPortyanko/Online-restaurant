import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout'
import HomePage from './components/homepage/HomePage';
import PizzaMenuPage from './components/PizzaMenuPage';
import BurgerMenuPage from './components/burger/BurgerMenuPage';
import RollsMenuPage from './components/RollsMenuPage';
import SetMenuPage from './components/sets/SetMenuPage';
import SushiMenuPage from './components/sushi/SushiMenuPage';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element = {<Layout/>}>
          <Route index path='/' element={<HomePage/>}></Route>
          <Route path='/pizza' element={<PizzaMenuPage/>}></Route>
          <Route path='/burger' element={<BurgerMenuPage/>}></Route>
          <Route path='/rolls' element={<RollsMenuPage/>}></Route>
          <Route path='/sets' element={<SetMenuPage/>}></Route>
          <Route path='/sushi' element={<SushiMenuPage/>}></Route>
          <Route path='/contacts' element={<Contacts/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
