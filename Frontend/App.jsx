// src/App.jsx
import React, { useState } from 'react';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import BrowsePros from './Pages/BrowsePros';
import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashboard';
import ProProfile from './Pages/ProProfile';
import Privacy from './Pages/Privacy';
import './Styles/index.css';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedPro, setSelectedPro] = useState(null);

    const handleNavigate = (page, proData = null) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentPage(page);
        if (proData) {
            setSelectedPro(proData);
        }
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home onNavigate={handleNavigate} />;
            case 'browse':
                return <BrowsePros onNavigate={handleNavigate} />;
            case 'pricing':
                return <Pricing onNavigate={handleNavigate} />;
            case 'contact':
                return <Contact onNavigate={handleNavigate} />;
            case 'dashboard':
                return <Dashboard onNavigate={handleNavigate} />;
            case 'pro-profile':
                return <ProProfile proData={selectedPro} onNavigate={handleNavigate} />;
            case 'privacy':
                return <Privacy onNavigate={handleNavigate} />;
            default:
                return <Home onNavigate={handleNavigate} />;
        }
    };

    return (
        <Layout currentPage={currentPage} onNavigate={handleNavigate}>
            {renderPage()}
        </Layout>
    );
}