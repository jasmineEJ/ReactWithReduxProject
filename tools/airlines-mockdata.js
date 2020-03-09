/// Modified

const roles = [
  {
    Admin: "Admin",
    AirlineStaff: "AirlineStaff"
  }
];
const flights = [
  {
    flightId: 1,
    flightName: "AirAsia",
    departure: "2020-03-23 10:15",
    arrival: "2020-03-23 12:10",
    source: "Chennai",
    destination: "Delhi",
    seatsReserved: ["A1", "B2", "C3", "D4"],
    price: 6000
  },
  {
    flightId: 2,
    flightName: "SpiceJet",
    departure: "2020-03-14 14:15",
    arrival: "2020-03-14 15:10",
    source: "Chennai",
    destination: "Mumbai",
    seatsReserved: ["A2"],
    price: 5200
  },
  {
    flightId: 3,
    flightName: "Indigo",
    departure: "2020-03-16 19:15",
    arrival: "2020-03-16 20:10",
    source: "Mumbai",
    destination: "Delhi",
    seatsReserved: ["B4"],
    price: 7000
  },
  {
    flightId: 4,
    flightName: "AirAsia",
    departure: "2020-03-18 04:50",
    arrival: "2020-03-18 06:10",
    source: "Goa",
    destination: "Delhi",
    seatsReserved: ["C5"],
    price: 8000
  },
  {
    flightId: 5,
    flightName: "SpiceJet",
    departure: "2020-03-19 11:15",
    arrival: "2020-03-19 13:10",
    source: "Chennai",
    destination: "Delhi",
    seatsReserved: ["D10"],
    price: 5500
  }
];

const ancillary = [
  {
    id: 1,
    serviceName: "Insurance",
    cost: 1000,
    description: "Travel insurance coverage for those who opted",
    iconSource: "icons/iconfinder_flight_insuarance.svg"
  },
  {
    id: 2,
    serviceName: "Food & Beverages",
    cost: 700,
    description: "Tasty food & beverages based on food preference",
    iconSource: "icons/meals.svg"
  },
  {
    id: 3,
    serviceName: "Special Meals / Premium booze",
    cost: 3000,
    description: "Special meals for premium paid passengers",
    iconSource: "icons/specialMeals.svg"
  },
  {
    id: 4,
    serviceName: "Extra Baggage Fee",
    cost: 500,
    description: "Fee to be paid when having baggage more than 10kg",
    iconSource: "icons/baggage.svg"
  },
  {
    id: 5,
    serviceName: "Hotel Tie-up",
    cost: 10000,
    description: "Hotel rooms would be arranged near by destination",
    iconSource: "icons/hotel-book.svg"
  },
  {
    id: 6,
    serviceName: "In-flight entertainment",
    cost: 5000,
    description: "Special laptops would be provided to watch movies",
    iconSource: "icons/entreteniment.svg"
  },
  {
    id: 7,
    serviceName: "Seat Preference",
    cost: 1500,
    description: "Preferred seat would be provided",
    iconSource: "icons/seat-preference.svg"
  },
  {
    id: 8,
    serviceName: "Inflight Shops",
    cost: 500,
    description: "Blankets will be provided based on request",
    iconSource: "icons/specialMeals.svg"
  },
  {
    id: 9,
    serviceName: "Airport Lounge",
    cost: 7000,
    description: "Airport Lounge will be allotted for passengers",
    iconSource: "icons/lounge.svg"
  }
];

const newService = {
  id: null,
  serviceName: "",
  cost: "",
  description: "",
  iconSource: ""
};

const addressDetails = [
  {
    id: 300,
    passengerId: "1",
    addressLine: "Gandhi street",
    city: "Madurai",
    state: "TamilNadu",
    country: "India"
  }
];

const passportDetails = [
  {
    id: 101,
    passengerId: "1",
    isPassportAvailable: true,
    passportNumber: "12AT678989090"
  }
];

const mealPreference = [
  {
    id: 500,
    passengerId: "1",
    flightId: "1",
    specialMeals: true
  }
];

const bookedFlightInfo = [
  {
    id: 201,
    passengerId: "1",
    flightId: "1",
    seatNumber: "A1",
    isCheckedIn: false,
    hasInfants: true,
    isWheelChairRequired: false
  }
];

const passengerDetails = [
  {
    id: 1,
    firstName: "Allen",
    lastName: "Joshua",
    age: "30",
    birthdate: "1990-01-25",
    gender: "Male",
    addressId: "300",
    passportRefId: "101",
    bookedFlightId: "201",
    classPreferred: "Economy",
    mealPreferenceId: "500",
    chosenServices: [1, 2, 3]
  }
];

const emptyPassenger = {
  id: null,
  firstName: "",
  lastName: "",
  age: "",
  birthdate: "",
  gender: "",
  addressId: "",
  passportRefId: "",
  bookedFlightId: "",
  classPreferred: "",
  mealPreferenceId: "",
  chosenServices: []
};

const passengers = [
  {
    id: 1,
    firstName: "Allen",
    lastName: "Joshua",
    age: "30",
    birthdate: "1990-01-25",
    gender: "Male",
    city: "Madurai",
    state: "TamilNadu",
    country: "India",
    passportNumber: "12AT678989090",
    isPassportAvailable: true,
    classPreferred: "Economy",
    mealPreference: "Special",
    flightId: "1",
    isCheckedIn: true,
    hasInfants: false,
    isWheelChairRequired: false,
    seatNumber: "A1",
    chosenServices: [1, 2, 3]
  },
  {
    id: 2,
    firstName: "Prasanna",
    lastName: "Kumar",
    age: "50",
    birthdate: "1970-01-13",
    gender: "Male",
    city: "Chennai",
    state: "TamilNadu",
    country: "India",
    passportNumber: "19AT678986666",
    isPassportAvailable: true,
    classPreferred: "Business",
    mealPreference: "Special",
    flightId: "1",
    isCheckedIn: true,
    hasInfants: false,
    isWheelChairRequired: false,
    seatNumber: "B2",
    chosenServices: [1, 2, 3]
  },
  {
    id: 3,
    firstName: "Merlin",
    lastName: "Vidhya",
    age: "25",
    birthdate: "1995-01-19",
    gender: "Female",
    city: "Tirunelveli",
    state: "TamilNadu",
    country: "India",
    passportNumber: "18BT678789678",
    isPassportAvailable: false,
    classPreferred: "Business",
    mealPreference: "Regular",
    flightId: "1",
    isCheckedIn: false,
    hasInfants: false,
    isWheelChairRequired: false,
    seatNumber: "C3",
    chosenServices: [7, 8]
  },
  {
    id: 4,
    firstName: "Shankar",
    lastName: "Vidhya",
    age: "33",
    birthdate: "1987-06-24",
    gender: "Male",
    city: "Thanjavur",
    state: "TamilNadu",
    country: "India",
    passportNumber: "18BT67878777",
    isPassportAvailable: false,
    classPreferred: "Business",
    mealPreference: "Regular",
    flightId: "1",
    isCheckedIn: false,
    hasInfants: true,
    isWheelChairRequired: false,
    seatNumber: "A2",
    chosenServices: [7, 8]
  },
  {
    id: 10,
    firstName: "Raj",
    lastName: "Kiran",
    age: "39",
    birthdate: "1987-06-24",
    gender: "Male",
    city: "Thanjavur",
    state: "TamilNadu",
    country: "India",
    passportNumber: "18BT89078777",
    isPassportAvailable: false,
    classPreferred: "Business",
    flightId: "1",
    mealPreference: "Special",
    isCheckedIn: false,
    hasInfants: true,
    isWheelChairRequired: true,
    seatNumber: "D5",
    chosenServices: [7, 8]
  },
  {
    id: 5,
    firstName: "Dhivya",
    lastName: "Kiruba",
    age: "34",
    birthdate: "1986-03-17",
    gender: "Female",
    city: "Madurai",
    state: "TamilNadu",
    country: "India",
    passportNumber: "18BS784568777",
    isPassportAvailable: true,
    classPreferred: "Economy",
    mealPreference: "Regular",
    flightId: "3",
    isCheckedIn: true,
    hasInfants: true,
    isWheelChairRequired: false,
    seatNumber: "B4",
    chosenServices: [5, 6]
  },
  {
    id: 6,
    firstName: "Sarvesh",
    lastName: "Kiruba",
    age: "10",
    birthdate: "2010-06-14",
    gender: "Male",
    city: "Madurai",
    state: "TamilNadu",
    country: "India",
    passportNumber: "18BS784545890",
    isPassportAvailable: false,
    classPreferred: "Business",
    mealPreference: "Special",
    flightId: "4",
    isCheckedIn: true,
    hasInfants: false,
    isWheelChairRequired: false,
    seatNumber: "C5",
    chosenServices: [5, 6]
  },
  {
    id: 7,
    firstName: "Justin",
    lastName: "Devaraj",
    age: "60",
    birthdate: "1960-09-12",
    gender: "Male",
    city: "Erode",
    state: "TamilNadu",
    country: "India",
    passportNumber: "18BS78789567",
    isPassportAvailable: true,
    classPreferred: "Business",
    mealPreference: "Regular",
    flightId: "5",
    isCheckedIn: true,
    hasInfants: false,
    isWheelChairRequired: true,
    seatNumber: "D10",
    chosenServices: [5, 8]
  },
  {
    id: 8,
    firstName: "Jessie",
    lastName: "alexandra",
    age: "56",
    birthdate: "1970-01-13",
    gender: "Male",
    city: "Chennai",
    state: "TamilNadu",
    country: "India",
    passportNumber: "19AT678986666",
    isPassportAvailable: true,
    classPreferred: "Business",
    mealPreference: "Special",
    flightId: "1",
    isCheckedIn: false,
    hasInfants: false,
    isWheelChairRequired: true,
    seatNumber: "E4",
    chosenServices: [1, 2, 3]
  }
];

const newPassenger = {
  id: null,
  firstName: "",
  lastName: "",
  age: "",
  birthdate: "",
  gender: "",
  city: "",
  state: "",
  country: "",
  passportNumber: "",
  isPassportAvailable: false,
  classPreferred: "",
  flightId: "",
  isCheckedIn: false,
  hasInfants: false,
  isWheelChairRequired: false,
  seatNumber: "",
  chosenServices: []
};

const newFlight = {
  flightId: null,
  flightName: "",
  departure: "",
  arrival: "",
  source: "",
  destination: "",
  seatsReserved: [],
  price: ""
};

module.exports = {
  roles,
  flights,
  passengers,
  ancillary,
  newPassenger,
  newService,
  newFlight
};
