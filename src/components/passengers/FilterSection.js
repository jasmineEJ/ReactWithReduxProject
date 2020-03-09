import React, { useState } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import SelectInput from "../common/SelectInput";

const FilterSection = () => {
  const [filterCondition, setFilterCondition] = useState();
  return (
    <Container>
      <Row>
        <SelectInput
          name="filterCondition"
          label="Filter By"
          defaultOption="Select a filter"
          options={filterCondition.map(condition => ({
            value: condition.filterBy,
            text: condition.name
          }))}
          onChange={this.handleChange}
          value={this.state.filteredCondition}
        />
      </Row>
      <Row>
        <Button
          style={{
            display: "inline-flex",
            marginRight: "50px",
            marginLeft: "15px"
          }}
          onClick={() =>
            this.props.actions.searchByFilters(this.state.filteredCondition)
          }
        >
          Search
        </Button>
        <Button onClick={this.resetFilter}>Clear</Button>
      </Row>
    </Container>
  );
};

export default FilterSection;
