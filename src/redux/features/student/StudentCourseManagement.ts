/* eslint-disable @typescript-eslint/no-explicit-any */
import { IQueryParams } from "../../../interfaces";
import { IResponse } from "../../../interfaces/interface";
import { baseApi } from "../../api/baseAPI";

const studentCourseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOfferedCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: IQueryParams) => {
            params.append(item?.name, item.value as string);
          });
        }

        return {
          url: "/offered-course/my-offered-course",
          method: "GET",
          params: params,
        };
      },

      transformResponse: (response: IResponse<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["offeredCourse"],
    }),

    enrollCourse: builder.mutation({
      query: (data) => ({
        url: "/enrolled-course/create-enrolled-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["offeredCourse"],
    }),

    getAllMyEnrolledCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: IQueryParams) => {
            params.append(item?.name, item.value as string);
          });
        }

        return {
          url: "/enrolled-course/my-enrolled-course",
          method: "GET",
          params: params,
        };
      },

      transformResponse: (response: IResponse<any>) => {
        return {
          data: [...response.data],
          meta: response.meta,
        };
      },
      providesTags: ["offeredCourse"],
    }),
  }),
});

export const { useGetAllOfferedCoursesQuery, useEnrollCourseMutation,useGetAllMyEnrolledCoursesQuery } =
  studentCourseApi;
