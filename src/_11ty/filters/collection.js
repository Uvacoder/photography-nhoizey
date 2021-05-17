// Inspired by @tylersticka
// https://github.com/11ty/eleventy/issues/399#issuecomment-466514166

module.exports = {
  photos_here: (collection, url) =>
    collection.filter((page) => {
      const r = new RegExp(`^${url}[^/]+\/$`);
      return page.data.photo !== undefined && r.test(page.url);
    }),
  photos_below: (collection, url) =>
    collection.filter((page) => {
      const r = new RegExp(`^${url}[^/]+\/([^/]+\/)+$`);
      return page.data.photo !== undefined && r.test(page.url);
    }),
  sub_galleries: (collection, url) =>
    collection.filter((page) => {
      const r = new RegExp(`^${url}[^/]+\/$`);
      return page.data.photo === undefined && r.test(page.url);
    }),
};