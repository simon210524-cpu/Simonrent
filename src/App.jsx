import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Simonrent</h1>
      {products.map(p => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.category} – {p.dailyPrice} Ft/nap</p>
        </div>
      ))}
    </div>
  );
}

export default App;
