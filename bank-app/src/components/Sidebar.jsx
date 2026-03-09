import React from 'react';

export default function Sidebar({ goToPage, activePage }) {
  const items = ['Dashboard', 'Transactions', 'Transfer', 'Depot', 'Sparkonto', 'Postfach', 'Karten', 'Profil'];

  return (
    <div className="sidebar">
      {items.map(item => (
        <div
          key={item}
          className={`sidebar-item ${activePage === item.toLowerCase() ? 'active' : ''}`}
          onClick={() => goToPage(item.toLowerCase())}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
