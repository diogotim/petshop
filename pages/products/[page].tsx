import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import classes from "../../common/styles/pages/Products.module.scss";
import { Product } from "../../types";
import Layout from "../../common/components/Layout/Layout";
import APIRequest from "../../modules/api/lib/API";
import ProductList from "../../common/components/ProductList/ProductList";
import { arrayFromRange } from "../../common/util/util";
import Pagination from "../../common/components/Pagination/Pagination";
import SEOHead from "../../common/components/SEOHead/SEOHead";

interface ProductsPageProps {
  products: Product[];
  page: number;
  total: number;
}

const ProductsPage: NextPage<ProductsPageProps> = ({
  products,
  page,
  total,
}) => {
  const perPage = parseInt(process.env.NEXT_PUBLIC_PRODUCTS_PER_PAGE || "5");

  return (
    <React.Fragment>
      <SEOHead title={`${page} | Products`} />
      <Layout>
        <div className={`container ${classes.root}`}>
          <h1>Products</h1>
          <ProductList products={products} />
          <Pagination
            perPage={perPage}
            currentPage={page}
            total={total}
            prefix="/products/"
          />
        </div>
      </Layout>
    </React.Fragment>
  );
};

export async function getStaticPaths() {
  const res = await APIRequest({ endpoint: "products?limit=100" });
  const productsJSON = await res.json();

  const total = productsJSON.data.length;
  const perPage = parseInt(process.env.NEXT_PUBLIC_PRODUCTS_PER_PAGE || "5");

  const pages = Math.ceil(total / perPage);

  const paths = arrayFromRange(1, pages).map((n) => ({
    params: {
      page: n.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx: { params: { page: string } }) {
  const perPage = parseInt(process.env.NEXT_PUBLIC_PRODUCTS_PER_PAGE || "5");
  const { page } = ctx.params;
  const offset = (parseInt(page) - 1) * perPage;

  const res = await APIRequest({
    endpoint: `products?limit=${perPage}&offset=${offset}`,
  });
  const products = await res.json();

  return {
    props: {
      products: products.data,
      page: parseInt(page),
      total: Math.ceil(products.total / perPage),
    },
  };
}

export default ProductsPage;
