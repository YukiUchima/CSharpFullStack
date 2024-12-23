import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/catalog";
import { Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: "anotherProduct",
        description: "newDescription",
        price: prevState.length * 100 + 100,
        pictureUrl: "google.com",
        type: "newType",
        brand: "somebrand",
        quantityInStock: 3,
      },
    ]);
  }

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="app">
      <Typography variant="h1">Re-Store</Typography>

      <Catalog products={products} addNewProduct={addProduct} />
    </div>
  );
}

export default App;
