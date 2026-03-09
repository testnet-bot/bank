import React from 'react';

export default function Header({ title, subtitle }) {
  return (
    <div className="page-header">
      <div className="page-title">{title}</div>
      <div className="page-subtitle">{subtitle}</div>
    </div>
  );
}
