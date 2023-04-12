import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { Header } from "./screens/HomeScreen/Javascript/Header.js";
import { StudentTeam } from "./screens/HomeScreen/Javascript/StudentTeam";
import { Team2122 } from "./screens/HomeScreen/Javascript/Team2122";
import { Team2021 } from "./screens/HomeScreen/Javascript/Team2021";
import { Beladi } from "./screens/HomeScreen/Javascript/Villages/Beladi";
import { Chandpur } from "./screens/HomeScreen/Javascript/Villages/Chandpur";
import { Chharba } from "./screens/HomeScreen/Javascript/Villages/Chharba";
import { Initiative } from "./screens/HomeScreen/Javascript/Initiative";
import { Meerpur } from "./screens/HomeScreen/Javascript/Villages/Meerpur.js";
import { Puranpur } from "./screens/HomeScreen/Javascript/Villages/Puranpur.js";
import { InitCard_Events } from "./screens/Events/InitCard_Events";
import { Component } from "react";
import { Footer } from "./screens/HomeScreen/Javascript/Footer";
import { Work } from "./screens/HomeScreen/Javascript/Work";
import About from "./screens/HomeScreen/Javascript/About";
import {Faculty} from "./screens/HomeScreen/Javascript/Faculty";
import {Contact} from "./screens/HomeScreen/Javascript/Contact";

class App extends Component{
  render()
  {
    return(
      <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' exact element={<HomeScreen/>}></Route>
          <Route path='/beladi' exact element={<Beladi/>}></Route>
          <Route path='/chandpur' exact element={<Chandpur/>}></Route>
          <Route path='/chharba' exact element={<Chharba/>}></Route>
          <Route path='/meerpur' exact element={<Meerpur/>}></Route>
          <Route path='/puranpur' exact element={<Puranpur/>}></Route>
          <Route path='/about' exact element={<About/>}></Route>
          <Route path='/Studentteam' exact element={<StudentTeam/>}></Route>
          <Route path='/Studentteam21-22' exact element={<Team2122/>}></Route>
          <Route path='/initiatives' exact element={<Initiative/>}></Route>
          <Route path='/Studentteam20-21' exact element={<Team2021/>}></Route>
          <Route path='/work' exact element={<Work/>}></Route>
          <Route path='/events' exact element={<InitCard_Events/>}></Route>
          <Route path='/faculty' exact element={<Faculty/>}></Route>
          <Route path='/contact' exact element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </>
    )
  }
};

export default App;