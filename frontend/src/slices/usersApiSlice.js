import { USERS_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
        // MAY HAVE ISSUE
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST'
      })
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data
      })
    }),
    getUsers: builder.query({
      query: () => ({
        url: USERS_URL
      }),
      providesTags: ['Users'], // if not provided, might have to reload
      keepUnusedDataFor: 5
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`,
        method: 'DELETE'
      })
    })
  })
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation
} = usersApiSlice
