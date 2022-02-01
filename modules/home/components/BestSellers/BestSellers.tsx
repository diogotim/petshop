import React from "react";
import classes from "./BestSellers.module.scss";
import ProductList from "../../../../common/components/ProductList/ProductList";
import { Product } from "../../../../types";

const BestSellers: React.FunctionComponent<{ products: Product[] }> = ({
  products,
}) => {
  return (
    <div className={`container ${classes.root}`}>
      <h2>Best sellers</h2>
      <ProductList products={products} />
    </div>
  );
};

export default BestSellers;
