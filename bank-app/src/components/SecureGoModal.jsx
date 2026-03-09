import React, { useState } from 'react';

export default function SecureGoModal({ show, onClose, onConfirm }) {
  const [code, setCode] = useState('');

  if (!show) return null;

  const handleConfirm = () => {
    onClose();
    if (code.length >= 1) {
      setTimeout(() => alert('✅ Auftrag erfolgreich erteilt!\n\nIhre Überweisung wurde mit SpardaSecureGo+ freigegeben und wird verarbeitet.'), 100);
    }
  };

  return (
    <div className="modal-overlay show">
      <div className="modal-box">
        <div className="modal-icon">📱</div>
        <h3>SpardaSecureGo+ Freigabe</h3>
        <p>Eine Push-Benachrichtigung wurde an Ihr iPhone 14 Pro gesendet.<br/>
        Oder geben Sie Ihren 6-stelligen Freigabecode ein:</p>
        <input
          className="modal-input"
          type="text"
          maxLength={6}
          placeholder="— — — — — —"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <div className="modal-actions">
          <button className="btn-primary" onClick={handleConfirm}>✓ Bestätigen</button>
          <button className="btn-secondary" onClick={onClose}>Abbrechen</button>
        </div>
      </div>
    </div>
  );
}
