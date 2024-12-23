import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

interface Props {
  products: Product[];
  addNewProduct: () => void;
}

export default function Catalog({ products, addNewProduct }: Props) {
  return (
    <>
      <ProductList products={products}/>
      <Button variant="contained" onClick={addNewProduct}>
        Add Product
      </Button>
    </>
  );
}
