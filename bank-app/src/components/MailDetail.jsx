import React from 'react';

export default function MailDetail({ mail }) {
  if (!mail) return <div className="mail-detail-panel" id="mail-detail">Keine Nachricht ausgewählt</div>;

  return (
    <div className="mail-detail-panel" id="mail-detail">
      <div className="mail-detail-subject">{mail.subject}</div>
      <div className="mail-detail-meta">{mail.meta}</div>
      <div className="mail-detail-body" dangerouslySetInnerHTML={{ __html: mail.body }}></div>
      <div style={{marginTop:'20px'}}>
        <button className="btn-secondary">⬇ PDF herunterladen</button>
      </div>
    </div>
  );
}
