import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackBtn = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      className={s.button}
      type="button"
      data-feedback={feedback}
      onClick={onLeaveFeedback}
    >
      {feedback}
    </button>
  );
};
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) => (
    <FeedbackBtn feedback={option} onLeaveFeedback={onLeaveFeedback} />
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
