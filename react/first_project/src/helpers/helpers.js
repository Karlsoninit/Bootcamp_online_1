export const helpers = () => {
  const container = (param, size) => ({
    border: `1px solid ${param ? "green" : "red"}`,
    width: size,
  });

  const headerTitle = (param, size) => ({
    color: param ? "green" : "red",
    fontSize: size,
  });

  const checkImage = (sku) => {
    return sku
      ? require(`../assets/products/${sku}_1.jpg`)
      : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.visassimply.com%2Fwp-content%2Fthemes%2Fvisassimply%2Fimages%2Fdefault.png&f=1&nofb=1";
  };

  const checkData = (data) => (Array.isArray(data) ? data : []);

  return { container, headerTitle, checkImage, checkData };
};
