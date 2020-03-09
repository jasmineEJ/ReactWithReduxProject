import React from "react";
import PropTypes from "prop-types";

import "./common.css";

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeHint: 0,
      filteredHints: [],
      showHints: false,
      userInput: ""
    };
  }

  onChange = event => {
    const { hints } = this.props;
    const userInput = event.currentTarget.value;
    // Filter our hints that don't contain the user's input
    const filteredHints = hints.filter(
      hint => hint.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeHint: 0,
      filteredHints,
      showHints: true,
      userInput: event.currentTarget.value
    });
    debugger;
    this.props.onChangeAuto(event);
  };

  onClick = event => {
    this.setState({
      activeHint: 0,
      filteredHints: [],
      showHints: false,
      userInput: event.currentTarget.innerText
    });
  };

  onKeyDown = event => {
    const { activeHint, filteredHints } = this.state;

    // User pressed the enter key
    if (event.keyCode === 13) {
      this.setState({
        activeHint: 0,
        showHints: false,
        userInput: filteredHints[activeHint]
      });
    }
    // User pressed the up arrow
    else if (event.keyCode === 38) {
      if (activeHint === 0) {
        return;
      }

      this.setState({ activeHint: activeHint - 1 });
    }
    // User pressed the down arrow
    else if (event.keyCode === 40) {
      if (activeHint - 1 === filteredHints.length) {
        return;
      }

      this.setState({ activeHint: activeHint + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: { activeHint, filteredHints, showHints, userInput }
    } = this;

    let hintsListComponent;

    if (showHints && userInput) {
      if (filteredHints.length) {
        hintsListComponent = (
          <ul className="hints">
            {filteredHints.map((hint, index) => {
              let className;
              if (index === activeHint) {
                className = "hint-active";
              }

              return (
                <li className={className} key={hint} onClick={onClick}>
                  {hint}
                </li>
              );
            })}
          </ul>
        );
      } else {
        hintsListComponent = (
          <div className="no-hints">
            <em>No Hints, you are on your own!</em>
          </div>
        );
      }
    }

    return (
      <>
        <label htmlFor={name}>{this.props.label}</label>
        <div className="field">
          <input
            type="text"
            name={this.props.name}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
            placeholder={this.props.placeholder}
          />
          {hintsListComponent}
        </div>
      </>
    );
  }
}

Autocomplete.propTypes = {
  hints: PropTypes.array,
  name: PropTypes.string,
  onChangeAuto: PropTypes.func,
  placeholder: PropTypes.string
};

export default Autocomplete;
