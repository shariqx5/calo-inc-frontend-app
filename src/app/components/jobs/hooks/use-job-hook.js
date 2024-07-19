"use-client";

import { SocketContext } from "@/contexts/SocketProvider";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export const useJob = () => {
  const [jobs, setJobs] = useState([]);
  const { isConencted, socket } = useContext(SocketContext);

  useEffect(() => {
    fetchJobsFromServer();
  }, []);

  useEffect(() => {
    if (isConencted) {
      socket.on("update-on-jobs", async (data) => {
        if (data.isJobResolved) {
          socket.emit(`update-on-job-received:${data.messageId}`);
          await fetchJobById(data.messageId, true);
        }
      });
    }
  }, [isConencted]);

  const fetchJobsFromServer = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_JOB_SERVICE_URL}/jobs`
    );
    if (response.status === 200) {
      const fetchedJobs = response.data;
      setJobs(fetchedJobs);
    }
  };

  const fetchJobById = async (id, updateExistingJob) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_JOB_SERVICE_URL}/jobs/${id}`
    );
    if (response.status === 200) {
      const fetchedJob = response.data;
      if (updateExistingJob) {
        updateExistingJobInList(fetchedJob);
      } else {
        appendItemInJobList(fetchedJob);
      }
    }
  };

  const updateExistingJobInList = (updatedJob) => {
    setJobs((prevJobs) =>
      prevJobs.map((prevJob) =>
        prevJob.id === updatedJob.id ? { ...updatedJob } : prevJob
      )
    );
  };

  const appendItemInJobList = (job) => {
    setJobs((prevJobs) => [...prevJobs, job]);
  };

  const createJob = async (jobName) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_JOB_SERVICE_URL}/jobs`,
      {
        name: jobName,
      }
    );

    if (response.status === 202) {
      alert("Request submitted, Will let you know the result soon..");
      await fetchJobById(response.data.jobId, false);
    }
  };

  return { jobs, createJob };
};
