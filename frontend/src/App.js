import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SubRAHditPage from './pages/SubRAHditPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/r/:subRAHditName" element={<SubRAHditPage />} />
                <Route path="/user/:username" element={<UserProfilePage />} />
            </Routes>
        </Router>
    );
}

export default App;

