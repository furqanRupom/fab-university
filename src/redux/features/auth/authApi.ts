import { baseApi } from "../../api/baseAPI";



/* create request for user login  */

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  
  }),
});

export const {useLoginMutation,} = authApi