// Custom hook for fetching jobs
// NOTICE: Using this approch will cost more pre-renders then nesseccery
// Therefore, its better to use the classic useEffect approch

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
