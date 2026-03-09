import React from "react";

const Transfer = () => {
  return (
    <section className="page" id="page-transfer">
      <div className="page-header">
        <div className="page-title">Überweisung</div>
        <div className="page-subtitle">Schnell & sicher</div>
      </div>

      <div className="card" style={{ padding: "20px" }}>
        <div className="card-title" style={{ marginBottom: "14px" }}>
          Überweisung ausführen
        </div>

        <div className="profil-row">
          <span className="profil-key">Empfänger</span>
          <input className="profil-value" type="text" placeholder="Max Mustermann" />
        </div>
        <div className="profil-row">
          <span className="profil-key">IBAN</span>
          <input className="profil-value" type="text" placeholder="DE89 7009 0500 0012 3456 78" />
        </div>
        <div className="profil-row">
          <span className="profil-key">Betrag</span>
          <input className="profil-value" type="text" placeholder="€ 0,00" />
        </div>
        <div className="profil-row">
          <span className="profil-key">Verwendungszweck</span>
          <input className="profil-value" type="text" placeholder="Miete März" />
        </div>

        <div style={{ marginTop: "16px" }}>
          <button className="btn-primary" onClick={() => alert("SpardaSecureGo+ Freigabe ausgelöst")}>
            Überweisung freigeben
          </button>
        </div>
      </div>
    </section>
  );
};

export default Transfer;
