import React from "react";

const Transactions = () => {
  return (
    <section className="page" id="page-transactions">
      <div className="page-header">
        <div className="page-title">Umsätze</div>
        <div className="page-subtitle">Letzte 30 Tage</div>
      </div>

      <div className="content-grid">
        <div className="card">
          <div className="card-header">
            <span className="card-title">Umsätze</span>
          </div>
          <div className="card-body">
            <div className="tx-item">
              <div className="tx-icon income">💸</div>
              <div className="tx-info">
                <div className="tx-name">Gehaltseingang</div>
                <div className="tx-detail">Februar 2026</div>
              </div>
              <div className="tx-right">
                <div className="tx-amount positive">+2.500,00 €</div>
                <div className="tx-date">28.02.2026</div>
              </div>
            </div>

            <div className="tx-item">
              <div className="tx-icon transfer">🔁</div>
              <div className="tx-info">
                <div className="tx-name">Überweisung an Max Mustermann</div>
                <div className="tx-detail">Miete März</div>
              </div>
              <div className="tx-right">
                <div className="tx-amount negative">−800,00 €</div>
                <div className="tx-date">01.03.2026</div>
              </div>
            </div>

            <div className="tx-item">
              <div className="tx-icon income">💸</div>
              <div className="tx-info">
                <div className="tx-name">Zinsgutschrift</div>
                <div className="tx-detail">Sparplan</div>
              </div>
              <div className="tx-right">
                <div className="tx-amount positive">+15,25 €</div>
                <div className="tx-date">28.02.2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transactions;
