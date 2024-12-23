import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Header from "./Header";
import Catalog from "../../features/catalog/Catalog";
import { Container, CssBaseline } from "@mui/material";

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
    <>
      <CssBaseline/>
      <Header/>
      <Container>
        <Catalog products={products} addNewProduct={addProduct} />
      </Container>
    </>
  );
}

export default App;
