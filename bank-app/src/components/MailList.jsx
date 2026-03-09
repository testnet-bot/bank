import React from 'react';

export default function MailList({ mails, selectedIdx, onSelect }) {
  return (
    <div className="mail-list-panel">
      <div className="card-header"><span className="card-title">Nachrichten</span></div>
      {mails.map((mail, idx) => (
        <div
          key={idx}
          className={`mail-list-item ${selectedIdx === idx ? 'selected' : ''} ${mail.unread ? 'unread' : ''}`}
          onClick={() => onSelect(idx)}
        >
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
            <div className="mail-list-subject">{mail.subject}</div>
            {mail.unread && <div className="mail-unread-dot"></div>}
          </div>
          <div className="mail-list-preview" dangerouslySetInnerHTML={{ __html: mail.preview }}></div>
          <div className="mail-list-date">{mail.date}</div>
        </div>
      ))}
    </div>
  );
}
