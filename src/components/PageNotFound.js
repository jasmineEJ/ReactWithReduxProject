import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import JumbotronWrapper from "../components/common/JumbotranWrapper";

const NotFound = props => (
  <JumbotronWrapper {...props.contentProps}>{props.children}</JumbotronWrapper>
);

NotFound.propTypes = {
  contentProps: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
};

NotFound.defaultProps = {
  contentProps: {
    title: "404 not found"
  },
  children: (
    <Link className="nav-link" to="/">
      Back
    </Link>
  )
};

NotFound.propTypes = {
  children: PropTypes.object
};

export default NotFound;
