import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials';

const App: React.FC = () => {

  return (
 <Router>
  <nav>
    <Link to="/">Home </Link> | <Link to="/about">About</Link>
  </nav>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<About/>}/>
    <Route path="/" element={<Services/>}/>
  </Routes>
 </Router>
  )
}

export default App
