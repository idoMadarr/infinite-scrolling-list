// Custom hook for fetching jobs
// NOTICE: Using this approach will cost more pre-renders than necessary
// Therefore in this case, it's better to use our classic useEffect approach - but I built it anyway just for learning purposes.

import axios from 'axios';
import {useEffect, useState} from 'react';

export const useJobs = async (page: number) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, [page]);

  const fetchJobs = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`,
    );
    setJobs(response.data);
  };

  return jobs;
};
