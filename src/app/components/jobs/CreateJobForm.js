"use client";

import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

export const CreateJobForm = ({ createJob }) => {
  const [jobName, setJobName] = useState("");
  const [isJobNameError, setIsJobNameError] = useState(false);

  const handleCreateJobButtonClick = async (event) => {
    event.preventDefault();

    if (jobName === "") {
      setIsJobNameError(true);
      return;
    }
    setJobName("");

    await createJob(jobName);
  };

  const handleCreateJobTextChange = (event) => {
    setIsJobNameError(false);
    const jobName = event.target.value;
    setJobName(jobName);
  };

  return (
    <Form>
      <Row className="d-flex align-items-end mb-5">
        <Col sm={6}>
          <Form.Group>
            <Form.Label>Job Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="For e:g Diet Plan"
              onChange={handleCreateJobTextChange}
              isInvalid={isJobNameError}
            />
            {isJobNameError && (
              <Form.Control.Feedback id="job-name-error" type="invalid">
                Job Name is a required field
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group>
            <Button
              type="submit"
              variant="primary"
              size="md"
              onClick={handleCreateJobButtonClick}
            >
              Create
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};
