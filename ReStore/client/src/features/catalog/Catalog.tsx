import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
  products: Product[];
  addNewProduct: () => void;
}

export default function Catalog({ products, addNewProduct }: Props) {
  return (
    <>
      <h1>Catalog</h1>
      <List>
        {products.map((product, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar src={product.pictureUrl} />
            </ListItemAvatar>
            <ListItemText>
              {product.name} - {product.price}
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={addNewProduct}>
        Add Product
      </Button>
    </>
  );
}
