import { Grid2 } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <Grid2 container spacing={4}>
      {products.map((product) => (
        <Grid2 key={product.id} size={4}>
          <ProductCard key={product.id} product={product} />
        </Grid2>
      ))}
    </Grid2>
  );
}
