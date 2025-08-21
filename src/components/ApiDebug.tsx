// Debug component to check environment variables
import React from 'react';

export const ApiDebug: React.FC = () => {
  const apiKey = import.meta.env.VITE_RAWG_API_KEY;
  
  return (
    <div style={{ 
      position: 'fixed', 
      top: 10, 
      right: 10, 
      background: '#000', 
      color: '#0f0', 
      padding: '10px',
      fontSize: '12px',
      zIndex: 9999,
      borderRadius: '4px'
    }}>
      <div>🔧 API Debug:</div>
      <div>Key: {apiKey ? `${apiKey.substring(0, 8)}...` : 'NOT FOUND'}</div>
      <div>Mode: {import.meta.env.MODE}</div>
      <div>Dev: {import.meta.env.DEV ? 'Yes' : 'No'}</div>
    </div>
  );
};
