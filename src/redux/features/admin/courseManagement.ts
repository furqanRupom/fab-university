import { baseApi } from "../../api/baseAPI";



const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSemesterRegistration: builder.mutation({
      query: (data) => ({
        url: "semester-registration/create-semester-registration",
        method: "POST",
        body: data,
      }),
    }),

    getAllSemesterRegistration: builder.query({
      query: () => ({
        url: "semester-registration",
        method: "GET",
      }),
    }),
  }),
});


export const { useAddSemesterRegistrationMutation,useGetAllSemesterRegistrationQuery} = courseManagementApi;