import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" exact component={<AboutMe />} />
                    <Route path="/portfolio" component={<Portfolio />} />
                    <Route path="/contact" component={<Contact />}  />
                    <Route path="/resume" component={<Resume />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;