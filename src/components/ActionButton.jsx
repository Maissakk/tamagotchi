import React from 'react';

function ActionButton({ icon, label, onClick }) {
  return (
    <button
      className="action-button"
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: '#ff6b6b',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      <img src={icon} alt={label} style={{ width: '40px', height: '40px' }} />
    </button>
  );
}

export default ActionButton;
