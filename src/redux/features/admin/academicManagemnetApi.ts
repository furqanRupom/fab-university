/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAcademicManagementData, IQueryParams } from "../../../interfaces/academicManagement.interfaces";
import { IResponse } from "../../../interfaces/interface";
import { baseApi } from "../../api/baseAPI";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: IQueryParams) => {
            params.append(item?.name, item.value as string);
          });
        }

        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: IResponse<IAcademicManagementData[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
    getAcademicFaculties: builder.query({
      query: () => ({
        url: "/academic-faculty",
        method: "GET",
      }),
    }),
    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculty/create-academic-faculty",
        method: "POST",
        body: data,
      }),
    }),
    addAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: "/academic-department/create-academic-department",
        method: "POST",
        body: data,
      }),
    }),
    getAllAcademicDepartment: builder.query({
      query: () => ({
        url: "/academic-department",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllAcademicSemestersQuery,
  useAddAcademicSemesterMutation,
  useAddAcademicFacultyMutation,
  useGetAcademicFacultiesQuery,
  useAddAcademicDepartmentMutation,
  useGetAllAcademicDepartmentQuery
} = academicManagementApi;
