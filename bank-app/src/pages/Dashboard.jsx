import React from 'react';
import Header from '../components/Header.jsx';

export default function Dashboard() {
  return (
    <div className="page active" id="page-dashboard">
      <Header title="Dashboard" subtitle="Übersicht aller Konten"/>
      <div className="dashboard-cards">
        <div className="card">
          <div className="card-header">Depotwert gesamt</div>
          <div className="card-body">38.412,75 €</div>
        </div>
        <div className="card">
          <div className="card-header">Sparkonto</div>
          <div className="card-body">15.240,00 €</div>
        </div>
      </div>
    </div>
  );
}
