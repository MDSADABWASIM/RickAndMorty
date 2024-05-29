import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import QUERY from '../../Services/Graphql/queries'
import graphqlClient from '../../Services/Graphql'

const initialState = {
  users: [],
  filteredUsers: [],
  isSearching: false,
  isFetching: false,
}


const getAllUsers = createAsyncThunk(
  'User/getAllUsers',
  async () => {
    const { data } = await graphqlClient.query({
      query: QUERY.GET_ALL_USER,
      fetchPolicy: 'network-only',
    })
    // All normalization should happen here to be able to trigger the extra reducers with ready data.
    return data.characters.results
  },
)

const getUser = createAsyncThunk(
  'User/getUser',
  async (id) => {
    const { data } = await graphqlClient.query({
      query: QUERY.GET_USER,
      variables: { id },
      fetchPolicy: 'network-only',
    })
    return data.character
  },
)


const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    initializeUser: (state, { payload }) => {
      return {
        ...state,
        users: [...state.users, ...payload],
      }
    },
    filterUser: (state, action) => {
      if (action.payload === null || action.payload === undefined) {
        state.isSearching = false
        state.filteredUsers = state.users
      } else {
        const filtered = state.users.filter((u) => u.name.includes(action.payload) === true)
        state.isSearching = true
        state.filteredUsers = filtered
      }
    },
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.isFetching = true
    },
    [getAllUsers.pending]: (state) => {
      state.isFetching = true
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false
      state.isSearching = false
      const updateUser = payload
      state.users = []
      state.users.push(updateUser)
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.isFetching = false
      state.isSearching = false
      state.filteredUsers = []
      state.users = [...payload]
    },
  },
})

export const UserActions = {
  getAllUsers,
  getUser,
  ...UserSlice.actions,
}
export const UserReducer = UserSlice.reducer
