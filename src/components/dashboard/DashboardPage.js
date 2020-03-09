import React, { useState } from "react";

import SelectOption from "./SelectOption";

import PassengerExpansionPanel from "./expansionItems/PassengerExpansionItems";
import AncillaryExpansionPanel from "./expansionItems/AncillaryExpansionItems";

const DashboardPage = () => {
  const [chosenOption, setChosenOption] = useState("");
  console.log("chosen option", chosenOption);
  return (
    <>
      <SelectOption
        selectedOption={chosenOption => setChosenOption(chosenOption)}
      />
      <hr />
      {chosenOption === "MANAGE_PASSENGERS" ? (
        <PassengerExpansionPanel chosenOption={chosenOption} />
      ) : chosenOption === "MANAGE_ANCILLARY" ? (
        <AncillaryExpansionPanel chosenOption={chosenOption} />
      ) : null}
    </>
  );
};

export default DashboardPage;
