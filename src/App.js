import "./styles.css"

import { Routes, Route } from 'react-router-dom';

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Header from './components/Header'
import Footer from './components/Footer'
import Verification from "./pages/Verification";
import Update from "./components/Update";
import Quiz from "./components/Quiz";
import ARView from "./components/ARView";
import XrHitModelContainer from "./components/xr-apple/XrHitModelContainer"
import Home from "./components/Home"
import EnglishPage from "./components/EnglishPage"
import ParentsGuidelines from "./components/ParentsGuidlines"
import Dashboard from "./pages/Dashboard";

//


const App = () => {
  return (
    <Header>
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/verification"  element={<Verification />}/>
        <Route path="/english"  element={<EnglishPage />}/>
        <Route path="/update"  element={<Update />}/>
        <Route path="/dashboard"  element={<Dashboard />}/>
        <Route path="/quiz"  element={<Quiz />}/>
        <Route path="/arview"  element={<XrHitModelContainer />}/>
        <Route path="/parentsguide"  element={<ParentsGuidelines />}/> 
        <Route path="/"  element={<Home />}/> 
      </Routes>
      <Footer />
    </Header>
  )
}

export default App