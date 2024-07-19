"use client";

import { Container } from "react-bootstrap";
import { CreateJobForm } from "./CreateJobForm";
import { useJob } from "./hooks/use-job-hook";
import { JobTable } from "./JobTable";

export const Jobs = () => {
  const { jobs, createJob } = useJob();

  return (
    <Container>
      <h3>Jobs</h3>
      <JobTable jobs={jobs} />
      <h3>Create Job</h3>
      <CreateJobForm createJob={createJob} />
    </Container>
  );
};
