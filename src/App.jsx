import { Component } from "react";
import Section from "./Section/Section";
import options from "./data/Options";
import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleSelectedFeedback = ({ target }) => {
    const { selectedFeedback } = target.dataset;
    this.setState((prevState) => ({
      [selectedFeedback]: prevState[selectedFeedback] + 1,
    }));
  };
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback />
        </Section>
      </div>
    );
  }
}

export default App;
