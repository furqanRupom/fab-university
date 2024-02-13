import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", token);
    }

    return headers;
  },
});

const customBaseQueryWithRefreshToken = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
  try {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 401) {


      const res = await fetch(
        "http://localhost:5000/api/v1/auth/refresh-token",
        {
          method: "POST",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data?.data?.secretToken) {
        const user = (api.getState() as RootState).auth.user;
        api.dispatch(
          setUser({
            user,
            token: data.data.secretToken,
          })
        );
      } else {
        api.dispatch(logout());
      }

      result =  await baseQuery(args, api, extraOptions);
    }

    return result; // Return the result after handling the error
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; // Re-throw the error after handling it
  }
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: customBaseQueryWithRefreshToken,
  tagTypes:['semester','course'],
  endpoints: () => ({}),
});
