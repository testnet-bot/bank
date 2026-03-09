import React from 'react';
import Header from '../components/Header.jsx';

export default function Profil() {
  return (
    <section className="page" id="page-profil">
      <Header title="Profil & Sicherheit" subtitle="Kundennummer: 123456 · Mitglied seit 2011" />

      <div className="profil-grid">
        {/* Persönliche Daten */}
        <div className="profil-section">
          <div className="profil-section-title">Persönliche Daten</div>
          {[
            ['Vorname', 'Thomas'],
            ['Nachname', 'Müller'],
            ['Geburtsdatum', '12.05.1985'],
            ['Steuer-ID', '14 xxx xx xxx'],
            ['Adresse', 'Maximilianstr. 42, 80539 München'],
            ['Telefon', '+49 176 •••••••789'],
            ['E-Mail', 't.mueller@email.de']
          ].map(([k,v], i) => (
            <div className="profil-row" key={i}><span className="profil-key">{k}</span><span className="profil-value">{v}</span></div>
          ))}
          <div style={{marginTop:16}}><button className="btn-secondary">Daten ändern</button></div>
        </div>

        {/* Sicherheit & Verfahren */}
        <div className="profil-section">
          <div className="profil-section-title">Sicherheit & Verfahren</div>
          {[
            ['SpardaSecureGo+', 'iPhone 14 Pro · Aktiviert seit 06.03.2026'],
            ['Sm@rtTAN plus', 'Backup-Verfahren mit TAN-Generator'],
            ['Benachrichtigungen per E-Mail', 'Eingang neuer Dokumente'],
            ['Push-Benachrichtigungen', 'Umsätze und Überweisungen']
          ].map(([name, desc], idx) => (
            <div className="security-item" key={idx}>
              <div>
                <div className="security-name">{name}</div>
                <div className="security-desc">{desc}</div>
              </div>
              <div className="toggle on" onClick={e => e.currentTarget.classList.toggle('on')}></div>
            </div>
          ))}
          <div style={{marginTop:16, display:'flex', gap:8}}>
            <button className="btn-secondary">PIN ändern</button>
            <button className="btn-secondary">Alias ändern</button>
          </div>
        </div>
      </div>
    </section>
  );
}
