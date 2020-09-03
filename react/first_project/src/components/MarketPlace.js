import React from "react";
import { ProductList } from "./productList";
import { ErrorPage } from "./errorPage/ErrorPage";
import PropTypes from "prop-types";

export function MarketPlace({ products }) {
  console.log("products", products);
  return products ? <ProductList products={products} /> : <ErrorPage />;
}

MarketPlace.propTypes = {
  products: PropTypes.array,
};
