// src/app/page.js
import React from 'react';

export default function Home() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    margin: 0,
  };

  const titleStyle = {
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '1rem',
  };

  const subtitleStyle = {
    fontSize: '2rem',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>This is a website in Next using Javascript</h1>
      <h2 style={subtitleStyle}>Boris was right</h2>
    </div>
  );
}