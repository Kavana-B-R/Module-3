import React from 'react';

const products = [
  { id: 1, name: 'Handmade Vase', price: '₹499' },
  { id: 2, name: 'Wool Scarf', price: '₹799' },
  { id: 3, name: 'Ceramic Bowl', price: '₹299' },
  { id: 4, name: 'Wooden Toy', price: '₹199' },
  { id: 5, name: 'Handwoven Basket', price: '₹599' },
  { id: 6, name: 'Pottery Mug', price: '₹149' }
];

export default function ProductList() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Crafts for Sale</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{product.name}</h3>
            <p style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#2e7d32',
              margin: '0'
            }}>
              {product.price}
            </p>
            <button style={{
              marginTop: '12px',
              padding: '8px 16px',
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%'
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
