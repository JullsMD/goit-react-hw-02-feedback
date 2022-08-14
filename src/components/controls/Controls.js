import styles from './Controls.module.css';

const Controls = ({ children }) => {
  return <ul className={styles.controls}>{children}</ul>;
};

export default Controls;
