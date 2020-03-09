import React from "react";
import propTypes from "prop-types";
import { Multiselect } from "multiselect-react-dropdown";

class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    let serviceOptions = [];
    let servicesOffered = this.props.servicesOffered
      ? this.props.servicesOffered
      : [];
    if (servicesOffered && servicesOffered.length > 0) {
      servicesOffered.forEach(item => {
        let obj = { name: item.serviceName, id: item.id };
        serviceOptions.push(obj);
      });
    }
    this.setState({ options: serviceOptions });
  }
  onSelect = (selectedList, selectedItem) => {
    console.log("selected list", selectedList);
    console.log("on selecting list", selectedItem);
    this.setState({ selectedValue: selectedItem });
  };

  onChange = event => {
    console.log("event", event.target.value);
  };

  onRemove = (selectedList, removedItem) => {
    console.log("on removing list");
  };

  render() {
    return (
      <Multiselect
        options={this.state.options} // Options to display in the dropdown
        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
        onChange={this.onChange}
        onSelect={this.onSelect} // Function will trigger on select event
        onRemove={this.onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
        showCheckbox={true}
      />
    );
  }
}

MultiSelect.propTypes = {
  servicesOffered: propTypes.array
};
export default MultiSelect;
