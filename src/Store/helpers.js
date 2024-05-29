import { createAsyncThunk } from '@reduxjs/toolkit';
import graphqlClient from '../Services/Graphql';

const getAsyncThunk = (thunkName, query) => {
  return createAsyncThunk(
    thunkName,
    async ({ variables }, { rejectWithValue }) => {
      const { data, error } = await graphqlClient.mutate({
        mutation: query,
        variables,
      });
      if (error) { rejectWithValue(error); }
      return data;
    },
  );
};


export default getAsyncThunk;
