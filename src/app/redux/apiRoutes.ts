export const routes = {
  products: {
    allProducts: () => `/product`,
    searchProducts: (page: string) => `/product/search?page=${page}`,
  },
};
