import { routes } from "../apiRoutes";
import { api } from "./apiSlice";

const exampleApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ id, token }) => ({
        url: `/whish-list/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["products"],
    }),
    postProduct: builder.mutation({
      query: ({ data, token, id }) => ({
        url: routes.products.searchProducts(id),
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        invalidatesTags: ["products"],
      }),
    }),
  }),
});
export const { useGetProductsQuery, usePostProductMutation } = exampleApi;
// const {data }= useGetProductsQuery( {id:"1", token:"token" },{
//     refetchOnMountOrArgChange: true,
//     pollingInterval: 1000,
// });
// const [postProduct, { isLoading, isError,isSuccess }] = usePostProductMutation();
// products(data)
