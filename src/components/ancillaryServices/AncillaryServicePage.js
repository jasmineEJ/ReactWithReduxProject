import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  loadAncillaryServices,
  deleteServiceSuccess
} from "../../react-redux-airlines/actions/ancillaryServiceActions";
import AncillaryServiceList from "./AncillaryServiceList";

const AncillaryServicePage = ({
  ansServices,
  loadAncillaryServices,
  deleteServiceSuccess
}) => {
  useEffect(() => {
    if (ansServices.length === 0) {
      loadAncillaryServices().catch(error => {
        alert("Ancillary service Details loading failed", error);
      });
    }
  }, []);

  const handleDeleteService = async service => {
    try {
      await deleteServiceSuccess(service);
    } catch (error) {
      throw error;
    }
  };
  return (
    <AncillaryServiceList
      ansServices={ansServices}
      onDeleteServiceClick={handleDeleteService}
    />
  );
};

AncillaryServicePage.propTypes = {
  ansServices: PropTypes.array,
  loadAncillaryServices: PropTypes.func,
  deleteServiceSuccess: PropTypes.func
};

function mapStateToProps(state) {
  return {
    ansServices: state.ancillaryServices
  };
}
const mapDispatchToProps = {
  loadAncillaryServices,
  deleteServiceSuccess
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AncillaryServicePage);
