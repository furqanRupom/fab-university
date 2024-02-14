/* eslint-disable @typescript-eslint/no-explicit-any */
import { IQueryParams } from "../../../interfaces";
import { IResponse } from "../../../interfaces/interface";
import { baseApi } from "../../api/baseAPI";

const facultyManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllEnrolledCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: IQueryParams) => {
            params.append(item?.name, item.value as string);
          });
        }

        return {
          url: "/enrolled-course/all-enrolled-courses",
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

    updateMarks:builder.mutation({
      query:(data) => ({
        url:"/enrolled-course/update-course-marks",
        method:"PUT",
        body:data
      })
    })

 

  
  }),
});

export const {
 useGetAllEnrolledCoursesQuery ,
 useUpdateMarksMutation
} = facultyManagementApi;
