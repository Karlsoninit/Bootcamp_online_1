export const tranformResponseFB = (data) =>
  Object.keys(data).map((key) => ({ ...data[key], id: key }));
