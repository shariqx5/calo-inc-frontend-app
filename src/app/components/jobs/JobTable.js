"use-client";

import { Container } from "react-bootstrap";
import { Table, Tbody, Td, Th, Thead, Tr } from "../common/Table/Table";

export const JobTable = ({ jobs = [] }) => {
  return (
    <>
      {jobs.length > 0 && (
        <Table>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Job ID</Th>
              <Th>Job Name</Th>
              <Th>Job Status</Th>
              <Th>Job Result</Th>
            </Tr>
          </Thead>
          <Tbody>
            {jobs.map((job, index) => (
              <Tr key={job.id}>
                <Td>{index + 1}</Td>
                <Td>{job.id}</Td>
                <Td>{job.name}</Td>
                <Td>{job.status}</Td>
                <Td>{job.result}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
      {jobs.length === 0 && (
        <Container>
          <div className="text-center">
            <h5>
              No jobs available. You may try to create job with below attached
              form.
            </h5>
          </div>
        </Container>
      )}
    </>
  );
};
