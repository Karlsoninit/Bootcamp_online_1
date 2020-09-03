import React from "react";
import styles from "./productList.module.css";
import { ProductListItem } from "../ProductListItem";
import PropTypes from "prop-types";

export function ProductList({ products }) {
  return (
    <ul className={styles.container}>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

// ProductList.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       availableSizes: PropTypes.array,
//       currencyFormat: PropTypes.string,
//       currencyId: PropTypes.string,
//       description: PropTypes.string,
//       id: PropTypes.number,
//       installments: PropTypes.number,
//       isFreeShipping: PropTypes.bool,
//       price: PropTypes.number,
//       sku: PropTypes.number.isRequired,
//       style: PropTypes.string,
//       title: PropTypes.string,
//     })
//   ),
// };
