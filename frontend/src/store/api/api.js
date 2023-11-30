import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api'
    }),
    endpoints(builder) {
        return {
            registerUser: builder.mutation({
                query: (formData) => {
                    console.log(formData);
                    return {
                        url: '/users/',
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: formData
                    }
                }
            }),
            setAssignement: builder.mutation({
                query: (assignment) => {
                    return {
                        url: '/assignments/',
                        method: "POST"
                        ,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: assignment
                    }
                }
            }),
            getAllAssignmentQuestions: builder.query({
                query: () => {
                    return {
                        url: '/assignments/',
                        method: "GET"
                    }
                }
            })
        }
    }
})




export const { useRegisterUserMutation, useSetAssignementMutation, useGetAllAssignmentQuestionsQuery } = api;