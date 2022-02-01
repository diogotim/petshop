import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import classes from "../../common/styles/pages/Product.module.scss";
import { Product } from "../../types";
import Layout from "../../common/components/Layout/Layout";
import APIRequest from "../../modules/api/lib/API";
import ProductList from "../../common/components/ProductList/ProductList";
import { formatProductSlug } from "../../common/util/util";
import Pagination from "../../common/components/Pagination/Pagination";
import SEOHead from "../../common/components/SEOHead/SEOHead";

interface ProductPageProps {
  product: Product;
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  return (
    <React.Fragment>
      <SEOHead title={product.name} />
      <Layout>
        <div className={`container ${classes.root}`}>
          <h1>{product.name}</h1>
          <div className={classes.productDetails}>
            <div className={classes.pic}>
              <img
                alt="product image"
                className={`imgContain imgFill`}
                src={`/${product.picture}`}
              />
            </div>
            <div className={classes.info}>
              <p className={classes.price}>Available for ${product.price}</p>
              <button type="button" className={classes.buyBtn}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export async function getStaticPaths() {
  const res = await APIRequest({ endpoint: "products?limit=100" });
  const productsJSON = await res.json();

  const paths = productsJSON.data.map((p: Product) => ({
    params: {
      slug: formatProductSlug(p.name),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx: { params: { slug: string } }) {
  const { slug } = ctx.params;

  const res = await APIRequest({ endpoint: `product/${slug}` });
  const product = await res.json();

  return {
    props: {
      product: product.data,
    },
  };
}

export default ProductPage;
