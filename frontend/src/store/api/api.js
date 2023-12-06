import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/'
    }),
    endpoints(builder) {
        return {
            registerUser: builder.mutation({
                query: (formData) => {
                    return {
                        url: '/auth/signup/',
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
            }),
            userLogin: builder.mutation({
                query: (data) => {
                    return {
                        url: 'login/',
                        method: "POST"
                        ,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: data

                    }
                }
            }),
            getAllTeachers: builder.query({
                query: () => {
                    return {
                        url: '/teachers/',
                        method: "GET"
                    }
                }
            }),
            getAllSchool: builder.query({
                query: () => {
                    return {
                        url: 'auth/schools/',
                        method: 'GET'
                    }
                }
            })
        }
    }
})




export const { useRegisterUserMutation, useSetAssignementMutation, useGetAllAssignmentQuestionsQuery, usePostAssignmentAnswerMutation, useUserLoginMutation, useGetAllTeachersQuery, useGetAllSchoolQuery } = api;