import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { CardColumns, Card, Table, Button } from "react-bootstrap";
import PropTypes from "prop-types";
const AncillaryServiceList = ({ ansServices, onDeleteServiceClick }) => {
  const [redirectToAddServicePage, setRedirectToAddServicePage] = useState("");
  return (
    <>
      {redirectToAddServicePage && (
        <Redirect
          to={{
            pathname: "/app/service",
            state: {
              showPassenger: true
            }
          }}
        />
      )}
      <Button
        variant="primary"
        onClick={() => setRedirectToAddServicePage(true)}
      >
        Add New Service
      </Button>
      <h3> Ancillary Services Details</h3>
      <Table bordered responsive>
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Cost</th>
            <th>Desctiption</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ansServices
            ? ansServices.map(ansService => {
                return (
                  <tr key={ansService.id}>
                    <td>{ansService.serviceName}</td>
                    <td>{ansService.cost}</td>
                    <td>{ansService.description}</td>
                    <td>
                      <Link to={"/app/service/" + ansService.id}>
                        <Button variant="primary">Edit</Button>
                      </Link>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => onDeleteServiceClick(ansService)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
    </>
  );
};

AncillaryServiceList.propTypes = {
  ansServices: PropTypes.array,
  onDeleteServiceClick: PropTypes.func
};

export default AncillaryServiceList;
