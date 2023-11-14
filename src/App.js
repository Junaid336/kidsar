import "./styles.css"

import { Routes, Route } from 'react-router-dom';

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Header from './components/Header'
import Footer from './components/Footer'
import Verification from "./pages/Verification";
import Lesson from "./components/Lesson";
import Update from "./components/Update";
import Progress from "./components/Progess";
import Quiz from "./components/Quiz";
import ARView from "./components/ARView";

const App = () => {
  return (
    <Header>
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/verification"  element={<Verification />}/>
        <Route path="/lesson"  element={<Lesson />}/>
        <Route path="/update"  element={<Update />}/>
        <Route path="/progress"  element={<Progress />}/>
        <Route path="/quiz"  element={<Quiz />}/>
        <Route path="/arview"  element={<ARView />}/> 
      </Routes>
      <Footer />
    </Header>
  )
}

export default App