import React from "react";
import Link from "next/link";
import classes from "./ProductList.module.scss";
import { Product } from "../../../types";
import { formatProductSlug } from "../../util/util";

type Props = {
  product: Product;
};

const ProductItem: React.FunctionComponent<Props> = ({ product }) => {
  return (
    <Link href={`/product/${formatProductSlug(product.name)}`}>
      <a className={classes.prod}>
        <div className={classes.productImg}>
          <img className={`imgCover imgFill`} src={`/${product.picture}`} />
        </div>
        <p className={classes.price}>${product.price}</p>
        <p className={classes.prodName}>{product.name}</p>
      </a>
    </Link>
  );
};

type ListProps = {
  products: Product[];
};

const ProductList: React.FunctionComponent<ListProps> = ({ products }) => {
  return (
    <div className={classes.root}>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
