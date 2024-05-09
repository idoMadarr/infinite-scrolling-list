import {createSlice} from '@reduxjs/toolkit';
import {JobType} from '../../types/types';

interface RootStateApp {
  jobList: JobType[];
  errorMessage: string | null;
}

const initialState: RootStateApp = {
  jobList: [],
  errorMessage: null,
};

export const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    updateJobList: (state, action) => {
      state.jobList = state.jobList.concat(action.payload);
    },
    setRefresh: (state, action) => {
      state.jobList = action.payload;
    },
    setMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {updateJobList, setRefresh, setMessage} = mainSlice.actions;

export default mainSlice.reducer;
