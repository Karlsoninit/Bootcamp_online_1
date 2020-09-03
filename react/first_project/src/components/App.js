import React, { Fragment } from "react";
import { MarketPlace } from "./MarketPlace";
import products from "../assets/products.json";
import { FireButton } from "../ui/buttons/FireButton";
import { helpers } from "../helpers/helpers";

const { checkData } = helpers();

export function App() {
  return (
    <Fragment>
      <FireButton btnTitle={"send"} />
      <MarketPlace products={checkData(products)} />
    </Fragment>
  );
}
