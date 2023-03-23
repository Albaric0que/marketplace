import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { setAuthToken } from './helpers/setAuthToken';
import './App.css';
import Login from './components/login/Login';
import Header from './components/headeer/Header';
import Collabs from './components/collabs/Collabs'
import AboutUs from './components/aboutUs/AboutUs';
import ItemCard from './components/itemCard/ItemCard';
import ShowItem from './components/showItem/ShowItem';
import AllItems from './components/allItems/AllItems';
import CartUser from './components/cartUser/CartUser';
import Footer from './components/Footer/Footer';


function App() {

  //check jwt token
  const token = localStorage.getItem("token");
  if (token) {
      setAuthToken(token);
  }

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/itemCard' element={<ItemCard />} />
          <Route path='/showItem/:id' element={<ShowItem />} />
          <Route path='/allItems' element={<AllItems />} />
          <Route path='/cartUser' element={<CartUser />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/friendsShops' element={<Collabs />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
