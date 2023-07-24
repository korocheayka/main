
import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from "react-router-dom"
import AboutPage from './pages/AboutPage/AboutPage';
import InstructorsPage from './pages/InstructorsPage/InstructorsPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {
  return (
    <div>
     <Header/>
     <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/instructors' element={<InstructorsPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/about' element={<AboutPage />} />
        
      </Routes>
     
    
    
    </div>
  );
}

export default App;
