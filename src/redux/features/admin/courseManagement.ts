/* eslint-disable @typescript-eslint/no-explicit-any */
import { IQueryParams } from "../../../interfaces";
import { IResponse } from "../../../interfaces/interface";
import { baseApi } from "../../api/baseAPI";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesterRegistration: builder.query({
      query: () => ({
        url: "semester-registration",
        method: "GET",
        providesTags: ["semester"],
      }),
    }),
    addSemesterRegistration: builder.mutation({
      query: (data) => ({
        url: "semester-registration/create-semester-registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["semester"],
    }),

    updateRegisteredSemester: builder.mutation({
      query: (args) => ({
        url: `semester-registration/${args.id}`,
        method: "PATCH",
        body: args.faculties,
      }),
      invalidatesTags: ["semester"],
    }),
    getAllCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: IQueryParams) => {
            params.append(item?.name, item.value as string);
          });
        }

        return {
          url: "/courses",
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
      providesTags: ["course"],
    }),
    addCourse: builder.mutation({
      query: (data) => ({
        url: "/courses/create-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["course"],
    }),
    addFaculty: builder.mutation({
      query: (args) => ({
        url: `/courses/${args.courseId}/assign-faculties`,
        method: "PUT",
        body: args.data,
      }),
    }),
    addOfferedCourse: builder.mutation({
      query: (data) => ({
        url: "/offered-course/create-offered-course",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddSemesterRegistrationMutation,
  useGetAllSemesterRegistrationQuery,
  useUpdateRegisteredSemesterMutation,
  useAddCourseMutation,
  useGetAllCoursesQuery,
  useAddFacultyMutation,
  useAddOfferedCourseMutation,
} = courseManagementApi;
