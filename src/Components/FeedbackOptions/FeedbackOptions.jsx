import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  );
};

FeedbackOptions.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
