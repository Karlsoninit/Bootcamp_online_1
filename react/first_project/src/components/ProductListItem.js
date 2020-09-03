import React from "react";
import PropTypes from "prop-types";

import { CustomCard } from "../ui/CustomCard";

export function ProductListItem({ product }) {
  return <CustomCard {...product} />;
}

ProductListItem.propTypes = {
  product: PropTypes.shape({
    availableSizes: PropTypes.array,
    currencyFormat: PropTypes.string,
    currencyId: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    installments: PropTypes.number,
    isFreeShipping: PropTypes.bool,
    price: PropTypes.number,
    sku: PropTypes.number.isRequired,
    style: PropTypes.string,
    title: PropTypes.string,
  }),
};
