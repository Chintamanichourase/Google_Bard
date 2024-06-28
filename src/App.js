import React from "react"
import {Brand,CTA,Navbar} from './components';
import { useAuth0 } from "@auth0/auth0-react";
import {Blog,Features,Footer,Header,Possibility,Bard} from './containers'
import './App.css'
function App() {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <Bard/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}
export default App