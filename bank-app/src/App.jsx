import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import SecureGoModal from './components/SecureGoModal.jsx';
import './styles/styles.css';
// Pages
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Transactions from './pages/Transactions.jsx';
import Transfer from './pages/Transfer.jsx';
import Depot from './pages/Depot.jsx';
import Sparkonto from './pages/Sparkonto.jsx';
import Postfach from './pages/Postfach.jsx';
import Karten from './pages/Karten.jsx';
import Profil from './pages/Profil.jsx';

export default function App() {
  const [activePage, setActivePage] = useState('login'); // default login
  const [showSecureGo, setShowSecureGo] = useState(false);

  const renderPage = () => {
    switch(activePage) {
      case 'login': return <Login onLogin={() => setActivePage('dashboard')} />;
      case 'dashboard': return <Dashboard />;
      case 'transactions': return <Transactions />;
      case 'transfer': return <Transfer onSecureGo={() => setShowSecureGo(true)} />;
      case 'depot': return <Depot />;
      case 'sparkonto': return <Sparkonto />;
      case 'postfach': return <Postfach />;
      case 'karten': return <Karten />;
      case 'profil': return <Profil />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      {activePage !== 'login' && <Sidebar active={activePage} setActive={setActivePage} />}
      <main className="app-main">
        {renderPage()}
      </main>

      <SecureGoModal 
        show={showSecureGo} 
        onClose={() => setShowSecureGo(false)} 
        onConfirm={() => setShowSecureGo(false)} 
      />
    </div>
  );
}
