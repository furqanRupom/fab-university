import { baseApi } from "../../api/baseAPI";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allAcademicSemesters: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
    }),
  }),
});

export const {useAllAcademicSemestersQuery} = academicSemesterApi
