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
                query: ({ assignment, token }) => {
                    return {
                        url: 'api/assignments/create/',
                        method: "POST"
                        ,
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': `Token ${token}`
                        },

                        body: assignment
                    }
                }
            }),
            
            getAllAssignmentQuestions: builder.query({
                query: ({ token, id }) => {
                    return {
                        url: `/api/assignments/${id}/`,
                        method: "GET",
                        headers: {
                            'Authorization': `Token ${token}`
                        }
                    }
                }
            }),
            postAssignmentAnswer: builder.mutation({
                query: ({ data, token }) => {
                    return {
                        url: 'api/submissions/create/',
                        method: "POST"
                        ,
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': `Token ${token}`
                        },
                        body: data
                    }
                }
            }),
            userLogin: builder.mutation({
                query: (data) => {
                    return {
                        url: 'auth/login/',
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
                query: (token) => {
                    return {
                        url: '/auth/teachers/',
                        method: "GET",
                        headers: {
                            'Authorization': `Token ${token}`
                        }
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
            }),
            validateUser: builder.query({
                query: (token) => {
                    return {
                        url: '/auth/test_token',
                        method: 'GET',
                        headers: {
                            'Authorization': `Token ${token}`
                        }
                    }
                }
            })
        }
    }
})




export const { useRegisterUserMutation, useSetAssignementMutation, useGetAllAssignmentQuestionsQuery, usePostAssignmentAnswerMutation, useUserLoginMutation, useGetAllTeachersQuery, useGetAllSchoolQuery, useValidateUserQuery } = api;