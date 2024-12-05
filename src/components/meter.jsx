import React from 'react';

function Meter({ value, max, icon, label }) {
  return (
    <div className="meter" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p>{label}</p>
      <div style={{ display: 'flex', gap: '5px' }}>
        {Array.from({ length: value }).map((_, i) => (
          <img key={i} src={icon} alt="Filled" style={{ width: '20px', height: '20px' }} />
        ))}
        {Array.from({ length: max - value }).map((_, i) => (
          <img key={i + value} src={icon} alt="Empty" style={{ width: '20px', height: '20px', opacity: 0.3 }} />
        ))}
      </div>
    </div>
  );
}

export default Meter;
