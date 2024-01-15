import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Edge, Node } from "reactflow";
import { BASE_URL } from "./const";

export const termsApi = createApi({
    reducerPath: "termApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        loadTerms: builder.query<Node[], void>({
            query: () => ({
                url: "/terms",
            }),
        }),
        loadEdges: builder.query<Edge[], void>({
            query: () => ({
                url: "/edges",
            }),
        }),
    }),
});

export const { useLoadTermsQuery, useLoadEdgesQuery } = termsApi;
