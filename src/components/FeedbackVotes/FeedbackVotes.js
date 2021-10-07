import PropTypes from "prop-types";
import styles from "./FeedbackVotes.module.css";
import { Component, createRef, useRef } from "react";
import { Statistics } from "../Statistics/Statistics";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Section } from "../Section/Section";
import { Notification } from "../Notification/Notification";

export default class FeedbackVotesCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  constructor() {
    super();

    this.onLeaveFeedback = this.onLeaveFeedback.bind(this);
  }

  onLeaveFeedback(e) {
    const targetID = e.target.id;
    return this.setState((prevState) => ({
      [targetID]: prevState[targetID] + 1,
    }));
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  }

  render() {
    return (
      <>
        <Section title="Please, leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
