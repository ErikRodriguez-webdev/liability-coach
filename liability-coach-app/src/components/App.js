import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';


const Home = () => (
    <div className="App">
        <h1>Welcome to My React App</h1>
        <p>This is a basic web application built with React.</p>
    </div>
);

const About = () => (
    <div className="App">
        <h1>About</h1>
        <p>This is the About page.</p>
    </div>
);

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;