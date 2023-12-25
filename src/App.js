import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//pages
import { Home, Category, Cart } from "./pages/index"
//components
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
