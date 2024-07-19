"use client";

import BootstrapTable from "react-bootstrap/Table";

export const Table = ({ children }) => {
  return (
    <BootstrapTable striped bordered hover>
      {children}
    </BootstrapTable>
  );
};

export const Thead = ({ children }) => {
  return <thead>{children}</thead>;
};

export const Tr = ({ children }) => {
  return <tr>{children}</tr>;
};

export const Th = ({ children }) => {
  return <th>{children}</th>;
};

export const Tbody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const Td = ({ children }) => {
  return <td>{children}</td>;
};
