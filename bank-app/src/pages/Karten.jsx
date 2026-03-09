import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import SecureGoModal from '../components/SecureGoModal.jsx';

export default function Karten() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="page" id="page-karten">
      <Header title="Meine Karten" subtitle="2 aktive Karten" />

      <div className="cards-grid">
        {/* Girocard */}
        <div>
          <div className="payment-card girocard">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
              <div className="card-chip">💳</div>
              <div style={{fontSize:13, fontWeight:700, opacity:.8}}>Girocard</div>
            </div>
            <div className="card-number">•••• •••• •••• 4782</div>
            <div className="card-bottom">
              <div>
                <div className="card-holder-label">Karteninhaber</div>
                <div className="card-holder-name">THOMAS MÜLLER</div>
              </div>
              <div className="card-expiry">
                <div className="card-expiry-label">Gültig bis</div>
                <div className="card-expiry-value">12/28</div>
              </div>
            </div>
          </div>
          <div className="card-info-row" style={{marginTop:12}}>
            <div className="card-info-item"><div className="card-info-label">Status</div><div className="card-info-value" style={{color:'var(--green)'}}>✓ Aktiv</div></div>
            <div className="card-info-item"><div className="card-info-label">Tageslimit</div><div className="card-info-value">1.500,00 €</div></div>
            <div className="card-info-item"><div className="card-info-label">Kontaktlos</div><div className="card-info-value">Aktiviert</div></div>
            <div className="card-info-item"><div className="card-info-label">Apple/Google Pay</div><div className="card-info-value">Aktiviert</div></div>
          </div>
        </div>

        {/* Mastercard */}
        <div>
          <div className="payment-card mastercard">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
              <div className="card-chip">💳</div>
              <div style={{fontSize:13, fontWeight:700, opacity:.8}}>Mastercard Gold</div>
            </div>
            <div className="card-number">•••• •••• •••• 9341</div>
            <div className="card-bottom">
              <div>
                <div className="card-holder-label">Karteninhaber</div>
                <div className="card-holder-name">THOMAS MÜLLER</div>
              </div>
              <div className="card-expiry">
                <div className="card-expiry-label">Gültig bis</div>
                <div className="card-expiry-value">08/27</div>
              </div>
            </div>
          </div>
          <div className="card-info-row" style={{marginTop:12}}>
            <div className="card-info-item"><div className="card-info-label">Status</div><div className="card-info-value" style={{color:'var(--green)'}}>✓ Aktiv</div></div>
            <div className="card-info-item"><div className="card-info-label">Kreditlimit</div><div className="card-info-value">5.000,00 €</div></div>
            <div className="card-info-item"><div className="card-info-label">Aktuell genutzt</div><div className="card-info-value">342,80 €</div></div>
            <div className="card-info-item"><div className="card-info-label">Online-Zahlung</div><div className="card-info-value">Aktiviert</div></div>
          </div>
        </div>
      </div>

      {/* Karten-Einstellungen */}
      <div className="card" style={{padding:20}}>
        <div className="card-title" style={{marginBottom:14}}>Karten-Einstellungen</div>
        {['Kontaktlose Zahlung (Girocard)', 'Online-Zahlungen (Mastercard)', 'Auslandszahlungen'].map((label, idx) => (
          <div className="security-item" key={idx}>
            <div>
              <div className="security-name">{label}</div>
              <div className="security-desc">
                {label === 'Kontaktlose Zahlung (Girocard)' && 'NFC-Zahlungen bis 50 € ohne PIN'}
                {label === 'Online-Zahlungen (Mastercard)' && '3D Secure aktiviert'}
                {label === 'Auslandszahlungen' && 'Zahlungen außerhalb EU/EWR'}
              </div>
            </div>
            <div className="toggle on" onClick={e => e.currentTarget.classList.toggle('on')}></div>
          </div>
        ))}
      </div>

      <SecureGoModal show={modalOpen} onClose={() => setModalOpen(false)} onConfirm={() => setModalOpen(false)} />
    </section>
  );
}
