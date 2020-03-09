import React from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash/uniqueId";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";

const PanelItem = props => (
  <div id={props.id}>
    <h2
      style={{
        fontFamily: "meiryo ,sans-serif",
        marginTop: "10px",
        fontSize: "15px"
      }}
    >
      {props.title}
    </h2>
    <div style={{ display: props.isOpen ? "block" : "none" }}>
      {props.children}
    </div>
  </div>
);

PanelItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  defaultOpen: PropTypes.bool,
  isOpen: PropTypes.bool,
  onDelete: PropTypes.func,
  children: PropTypes.object
};

class ExpansionSteps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPanels: [
        {
          id: uniqueId("expansionsteps-step-"),
          isOpen: true,
          defaultOpen: true,
          title: this.props.stepsMap[0].title,
          step: this.props.stepsMap[0].step,
          receivedData: null
        }
      ]
    };
  }

  nextHandler = (nextInfo, currentPanelIndex) => {
    let nextPanelIndex;
    if (nextInfo.stepsToSkip !== "" && nextInfo.stepsToSkip !== undefined) {
      nextPanelIndex = nextInfo.stepsToSkip;
    } else {
      nextPanelIndex = currentPanelIndex;
    }
    console.log("current panel title", nextPanelIndex);
    if (this.state.currentPanels.length > nextPanelIndex + 1) {
      this.deleteStep(this.state.currentPanels.length - 1);
      for (
        let i = this.state.currentPanels.length - 1;
        i > nextPanelIndex;
        i--
      ) {
        this.deleteStep(i);
      }
    }

    // Get next step
    let nextStep = this.props.stepsMap[nextPanelIndex + 1];
    if (!nextStep) {
      console.log("Next step not found!");
      return;
    }
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.currentPanels[currentPanelIndex].isOpen = false;
    console.log("Found nextStep :: ", nextStep);
    // added so we can change the tittle if we use the same component on different parts
    // just add in the nextInfo the newTitle key
    let panelTitle = nextStep.title;
    let stepData = nextInfo.data;
    if (
      stepData &&
      stepData.hasOwnProperty("newTitle") &&
      stepData.newTitle !== ""
    ) {
      panelTitle = stepData.newTitle;
    }
    this.setState({
      currentPanels: this.state.currentPanels.concat([
        {
          title: panelTitle,
          step: nextStep.step,
          isOpen: true,
          receivedData: stepData,
          id: uniqueId("expansionsteps-step-")
        }
      ])
    });
    this.props.pageDataHandler && this.props.pageDataHandler(nextInfo.data);
  };

  backHandler = (nextInfo, panelIdx) => {
    var nextPanelIndex;
    if (nextInfo.stepsToSkip !== "" && nextInfo.stepsToSkip !== undefined) {
      nextPanelIndex = nextInfo.stepsToSkip;
      console.log("Skip to be Needed", nextPanelIndex);
    } else {
      nextPanelIndex = panelIdx;
    }
    const prevStep = this.props.stepsMap[nextPanelIndex - 1];
    console.log("Found nextStep :: skip ", prevStep);
    if (prevStep) {
      this.setState({
        currentPanels: this.state.currentPanels.map((p, i) => {
          if (i === panelIdx - 1) {
            p.isOpen = true;
            p.step = prevStep.step;
            p.receivedData = nextInfo.data;
          } else {
            p.isOpen = false;
          }
          return p;
        })
      });
      this.props.pageDataHandler && this.props.pageDataHandler(nextInfo.data);
      if (nextPanelIndex === nextInfo.stepsToSkip) {
        this.deleteStep(panelIdx);
      } else {
        this.deleteStep(nextPanelIndex);
      }
    }
  };
  backToResult = (nextInfo, panelIdx) => {
    const prevStep = this.props.stepsMap[panelIdx - 2];
    console.log("Found nextStep :: ", prevStep);
    if (prevStep) {
      this.setState({
        currentPanels: this.state.currentPanels.map((p, i) => {
          if (i === panelIdx - 2) {
            p.isOpen = true;
            p.step = prevStep.step;
            p.receivedData = nextInfo.data;
          } else {
            p.isOpen = false;
          }
          return p;
        })
      });
      this.props.pageDataHandler && this.props.pageDataHandler(nextInfo.data);
      this.deleteStep(panelIdx - 1);
    }
  };

  backToIndex = (nextInfo, panelIdx) => {
    const prevStep = this.props.stepsMap[panelIdx - 3];
    console.log(prevStep, "Current Panel");

    if (prevStep) {
      this.setState({
        currentPanels: this.state.currentPanels.map((p, i) => {
          if (i === panelIdx - 3) {
            p.isOpen = true;
            p.step = prevStep.step;
            p.receivedData = nextInfo.data;
          } else {
            p.isOpen = false;
          }
          return p;
        })
      });
      this.props.pageDataHandler && this.props.pageDataHandler(nextInfo.data);
      this.deleteStep(panelIdx - 2);
    }
  };
  deleteStep(stepIndex) {
    const array = [...this.state.currentPanels];
    array.splice(stepIndex);
    this.setState({ currentPanels: array });
  }

  setPanelState(panelIndex, stateName, value) {
    const copycurrentPanels = this.state.currentPanels.slice();
    copycurrentPanels[panelIndex][stateName] = value;
    this.setState({
      currentPanels: copycurrentPanels
    });
    if (this.state.currentPanels.length !== 1) this.deleteStep(panelIndex + 1);
  }

  render() {
    return (
      <ExpansionPanel expanded>
        {this.state.currentPanels.map((m, i) => (
          <PanelItem
            className={"item-background"}
            id={m.id}
            title={m.title}
            key={m.id}
            isOpen={m.isOpen}
            defaultOpen={m.defaultOpen}
          >
            <m.step
              nextHandler={data => this.nextHandler(data, i)}
              backHandler={data => this.backHandler(data, i)}
              backToResult={data => this.backToResult(data, i)}
              backToIndex={data => this.backToResult(data, i)}
              receivedData={m.receivedData}
              {...this.props}
            />
          </PanelItem>
        ))}
      </ExpansionPanel>
    );
  }
}
ExpansionSteps.propTypes = {
  stepsMap: PropTypes.array.isRequired,
  pageDataHandler: PropTypes.func,
  nextHandler: PropTypes.func,
  backHandler: PropTypes.func,
  backToResult: PropTypes.func,
  backToIndex: PropTypes.func
};

export default ExpansionSteps;
