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
            }),
            postAssignmentAnswer: builder.mutation({
                query: (data) => {
                    console.log(data);
                    return {
                        url: '/solution/',
                        method: "POST"
                        ,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: data
                    }
                }
            })
        }
    }
})




export const { useRegisterUserMutation, useSetAssignementMutation, useGetAllAssignmentQuestionsQuery, usePostAssignmentAnswerMutation } = api;