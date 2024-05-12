import './App.css'
import AboutUs from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer'
import HelpPage  from './components/HelpPage';
import Navbar from './components/LocalNavbar'
import NotFound from './components/NotFound';
import MyRepos from './components/repoList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<>
      <Navbar/> 
     <MyRepos/>
     <Footer/></>}/>
     <Route path="*" element={<NotFound />} /> {/* Catch-all for unmatched routes */}
     <Route path="/about" element={<> <Navbar/> < AboutUs/> <Footer/></>} /> {/* Catch-all for unmatched routes */}
     <Route path="/help" element={<> <Navbar/> <HelpPage/></>}/>
     <Route path="/contact" element={<><Navbar/><Contact/><Footer/></>}/> {/* Catch-all for unmatched routes */}
     </Routes>
     </Router>
    </>
  )
}
<<<<<<< HEAD

export default App
=======
export default App;
>>>>>>> c0908f9 (fixed vercel route error)
