// component's config object.
const components = {
  dashboard: {
    component: "Dashboard",
    url: "/dashboard",
    title: "Dashboard",
    icon: "menu",
    module: 1
  },
  checkin: {
    component: "CheckinManagement",
    url: "/checkin",
    title: "Airline Check-in",
    icon: "menu",
    module: 1
  },
  inflight: {
    component: "InflightManagement",
    url: "/flights",
    title: "In-Flight",
    icon: "menu",
    module: 1
  }
};

// modules for grouping.
const modules = {
  0: {
    title: "Dashboard",
    icon: "home",
    isExpendable: true
  }
};

// component's access to roles.
const rolesConfig = {
  admin: {
    routes: [...Object.values(components)]
  },
  airlineStaff: {
    routes: [components.checkin, components.inflight]
  },
  common: {
    routes: [
      {
        component: "AncillaryManagement",
        url: "/ancillary",
        title: "Ancillary Management",
        icon: "menu",
        module: 1
      }
    ]
  }
};

export { modules, rolesConfig };
