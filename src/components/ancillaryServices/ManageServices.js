import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ServiceForm from "./ServiceForm";
import {
  loadAncillaryServices,
  saveAncillaryService
} from "../../react-redux-airlines/actions/ancillaryServiceActions";
import { newService } from "../../../tools/airlines-mockdata";

const ManageServices = ({
  services,
  history,
  loadAncillaryServices,
  ...props
}) => {
  console.log("check props here", props);
  const [service, setService] = useState({ ...props.service });
  useEffect(() => {
    if (services.length === 0) {
      loadAncillaryServices().catch(error => {
        throw error;
      });
    } else {
      setService({ ...props.service });
    }
  }, [services]);
  const handleSubmit = () => {
    console.log("submit");
    event.preventDefault();
    props
      .saveAncillaryService(service)
      .then(() => {
        debugger;
        history.push("/app/ancillary");
      })
      .catch(error => {
        throw error;
      });
  };

  function onChangeService(event) {
    let { name, value } = event.target;
    setService(prevServiceData => ({
      ...prevServiceData,
      [name]: value
    }));
  }
  return (
    <ServiceForm
      service={service}
      onChangeService={onChangeService}
      handleSubmit={handleSubmit}
    />
  );
};

ManageServices.propTypes = {
  services: PropTypes.array.isRequired,
  service: PropTypes.object,
  loadAncillaryServices: PropTypes.func,
  saveAncillaryService: PropTypes.func,
  history: PropTypes.object.isRequired
};

export function getServiceById(services, id) {
  return services.find(service => service.id === parseInt(id));
}

function mapStateToProps(state, ownProps) {
  let serviceIdShownInURL = ownProps.match.params.id;
  console.log("idShownInURL->", serviceIdShownInURL);
  console.log("state->", state);
  let service =
    serviceIdShownInURL && state.ancillaryServices.length > 0
      ? getServiceById(state.ancillaryServices, serviceIdShownInURL)
      : newService;
  return {
    services: state.ancillaryServices,
    service
  };
}
const mapDispatchToProps = {
  loadAncillaryServices,
  saveAncillaryService
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageServices);
