import './App.css';
import Navbar from './components/Navbar/Navbar';
import Appointment from './components/Appointment/Appointment';
import Gallery from './components/Gallery/Gallery';
import Home from './components/FirstPage/FirstPage';
import Services from './components/Services/Services';
import Footer from './components/FirstPage/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (    
      <Router>
        <Navbar/>
            <div className="App">
                <Routes>
                  <Route path="/" element={<Home/>}/>
                    <Route path="/Appointment" element={<Appointment/>}/>
                    <Route path="/Services" element={<Services/>}/>
                    <Route path="/Gallery" element={<Gallery/>}/>
                    <Route path="/Services" element={<Services/>}/>
                </Routes> 
            </div>
            <Footer/>
      </Router>
       
    
  );
}

export default App;
