import {useEffect, useState} from 'react';
import './App.css';
import { Routes, Route, } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Home from "./pages/home";
import axios, { Axios } from 'axios';

function App() {
  const isUserLogged = true;

  const [films, setFilms] = useState (null);
  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(function (response) {
      setFilms(response.data)
    })
    .catch(function(error){
      console.log(error);
    })
    .finally(function(){
      console.log('finally')
    })
});



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        {isUserLogged ? <Route path="home" element={<Home />} /> : <></> }
      </Routes>
    </div>
  );
}

export default App;
