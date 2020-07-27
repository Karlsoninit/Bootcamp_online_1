export const Cashier = function (name) {
  this.name = name;
  this.sales = 0;
  this.saleProducts = [];
  this.sell = function (product) {
    this.sales += 1;
    this.saleProducts.push(product);
    return `Manager ${this.name} sold ${product}.`;
  };
};
