import React from 'react';
import ProductList from './components/ProductList.jsx';
import PWABadge from './PWABadge.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{
        backgroundColor: '#4caf50',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: '0', fontSize: '2.5rem' }}>🛒 CraftCart</h1>
        <p style={{ margin: '10px 0 0 0', fontSize: '1.1rem' }}>
          Discover Unique Handmade Crafts
        </p>
      </header>

      <main style={{ minHeight: 'calc(100vh - 140px)' }}>
        <ProductList />
      </main>

      <footer style={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #ddd'
      }}>
        <p style={{ margin: '0', color: '#666' }}>
          © 2024 CraftCart - Bringing handmade crafts to your doorstep
        </p>
      </footer>

      <PWABadge />
    </div>
  );
}

export default App;
