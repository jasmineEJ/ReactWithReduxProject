import React from "react";
import JumbotronWrapper from "../components/common/JumbotranWrapper";

// Private routes.
const AdminOnly = () => <JumbotronWrapper title="Admin Only" />;
const AirlineStaff = () => <JumbotronWrapper title="Airline Staff" />;
const Dashboard = () => <JumbotronWrapper title="Dashboard" />;
import * as CheckinManagement from "../segments/CheckinManagement";
import * as InflightManagement from "../segments/InflightManagement";
import * as AncillaryManagement from "../segments/AncillaryManagement";

export {
  AdminOnly,
  AirlineStaff,
  Dashboard,
  CheckinManagement,
  InflightManagement,
  AncillaryManagement
};
