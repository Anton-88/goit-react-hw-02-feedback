import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";
import { Component, createRef, useRef } from "react";

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={styles.feedback_container}>
      <ul className={styles.feedback_buttons}>
        {options.map((option) => (
          <li key={option}>
            <button
              type="button"
              className={[styles.feedback_button_item, styles.custom_btn].join(
                " "
              )}
              onClick={onLeaveFeedback}
            >
              <span id={option}>{option} vote</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};
