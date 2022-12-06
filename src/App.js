import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

// importing pages
import LandingPage from "./pages/LandingPage/LandingPage";
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';

// importing components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<LandingPage />}></Route>
                    <Route exact path='/team' element={<Team />}></Route>
                    <Route exact path='/contact' element={<Contact />}></Route>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
