//import logo from './logo.png';
import './App.css';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import NotFound from "./pages/NotFound";
import {Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactUs from './pages/ContactUs';
import emailjs from 'emailjs-com';



function App() {
  return <>
  <Navbar />
  <Switch>
  
  <Route exact path="/" component={Home}/>
  <Route exact path="/rooms/" component={Rooms}/>
  <Route exact path="/rooms/:slug" component={SingleRoom}/>
  <Route exact path="/contact" component={ContactUs}/> 
  <Route component={NotFound}/>


  </Switch>
 </>;

  }

export default App;
