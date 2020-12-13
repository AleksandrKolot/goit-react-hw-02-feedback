import React, { Component } from "react";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    let total = 0;
    for (const value in this.state) {
      total += this.state[value];
    }
    return total;
  };
}
