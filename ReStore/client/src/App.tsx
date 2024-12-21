import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { name: "prod1", price: 100.0, id: 1 },
    { name: "pすだきroduct", price: 130.0, id: 2 },
    { name: "prod5", price: 150.55, id: 3 },
  ]);

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      { name: "anotherProduct", price: 100, id: prevState.length },
    ]);
  }

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="app">
      <h1>Re-Store</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name}({index}) - ${product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
