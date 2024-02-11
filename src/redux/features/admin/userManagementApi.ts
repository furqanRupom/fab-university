import { IStudent } from "../../../interfaces";
import {

  IQueryParams,
} from "../../../interfaces/academicManagement.interfaces";
import { IResponse } from "../../../interfaces/interface";
import { baseApi } from "../../api/baseAPI";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation({
      query: (data) => ({
        url: "users/create-student",
        method: "POST",
        body: data,
      }),
    }),
    getAllStudents: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: IQueryParams) => {
            params.append(item?.name, item.value as string);
          });
        }

        return {
          url: "/students",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: IResponse<IStudent[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    createFaculty: builder.mutation({
      query: (data) => ({
        url: "users/create-faculty",
        method: "POST",
        body: data,
      }),
    }),
    getAllFaculties: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: IQueryParams) => {
            params.append(item?.name, item.value as string);
          });
        }

        return {
          url: "/faculties",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: IResponse<IStudent[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    createAdmin: builder.mutation({
      query: (data) => ({
        url: "users/create-admin",
        method: "POST",
        body: data,
      }),
    }),
    getAllAdmins: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: IQueryParams) => {
            params.append(item?.name, item.value as string);
          });
        }

        return {
          url: "/admins",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: IResponse<IStudent[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useCreateStudentMutation, useGetAllStudentsQuery,useCreateFacultyMutation,useGetAllFacultiesQuery,useGetAllAdminsQuery,useCreateAdminMutation } =
  userManagementApi;
