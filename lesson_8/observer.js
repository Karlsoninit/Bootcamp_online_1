export class Services {
  observer = (images) => {
    const options = {
      threshold: 0.2,
    };

    const callback = (entries) => {
      entries.forEach((entrie) => {
        if (entrie.isIntersecting) {
          console.log("entrie", entrie);
          const image = entrie.target.dataset.fullimage;
          entrie.target.src = image;
        }
      });
    };

    const obs = new IntersectionObserver(callback, options);

    if (images.length) {
      images.forEach((image) => {
        obs.observe(image);
      });
    }
  };
}
