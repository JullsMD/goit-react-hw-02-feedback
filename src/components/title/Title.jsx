import PropTypes from 'prop-types';
import styles from './Title.module.css';
const Title = ({ title }) => <h1 className={styles.title}>{title}</h1>;

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
