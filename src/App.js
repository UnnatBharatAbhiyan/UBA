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
import {Init1} from "./screens/Initiatives/Init1";
import {Init2} from "./screens/Initiatives/Init2";
import {Init3} from "./screens/Initiatives/Init3";
import {Init4} from "./screens/Initiatives/Init4";
import {Init5} from "./screens/Initiatives/Init5";
import {Init6} from "./screens/Initiatives/Init6";
import {Init7} from "./screens/Initiatives/Init7";
import {Init8} from "./screens/Initiatives/Init8";
import {Init9} from "./screens/Initiatives/Init9";
import {Init10} from "./screens/Initiatives/Init10";
import {Init11} from "./screens/Initiatives/Init11";
import { E1} from "./screens/ev/E1";
import { E2 } from "./screens/ev/E2";
import { E3 } from "./screens/ev/E3";
import { E4 } from "./screens/ev/E4";

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
          <Route path='/init1' exact element={<Init1/>}></Route>
          <Route path='/init2' exact element={<Init2/>}></Route>
          <Route path='/init3' exact element={<Init3/>}></Route>
          <Route path='/init4' exact element={<Init4/>}></Route>
          <Route path='/init5' exact element={<Init5/>}></Route>
          <Route path='/init6' exact element={<Init6/>}></Route>
          <Route path='/init7' exact element={<Init7/>}></Route>
          <Route path='/init8' exact element={<Init8/>}></Route>
          <Route path='/init9' exact element={<Init9/>}></Route>
          <Route path='/init10' exact element={<Init10/>}></Route>
          <Route path='/init11' exact element={<Init11/>}></Route>
          <Route path='/e1' exact element={<E1/>}></Route>
          <Route path='/e2' exact element={<E2/>}></Route>
          <Route path='/e3' exact element={<E3/>}></Route>
          <Route path='/e4' exact element={<E4/>}></Route>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
      </>
    )
  }
};

export default App;