import axios from 'axios';
import {Dispatch} from '@reduxjs/toolkit';
import {setMessage, setRefresh, updateJobList} from '../slices/mainSlice';
import * as API from '../../fixtures/api-routes.json';

export const fetchAvailableJobs =
  (page: number, limit: number = 10, refresh: boolean = false) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        `${API.FETCH_JOBS}_limit=${limit}&_page=${page}`,
      );

      const jobs = response.data;

      refresh ? dispatch(setRefresh(jobs)) : dispatch(updateJobList(jobs));
    } catch (error) {
      // The Server would handle error messages accordingly (error.response.data)
      const errorMessage = 'Something went worng';
      dispatch(setMessage(errorMessage));
    }
  };
