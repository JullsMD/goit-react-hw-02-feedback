import styles from './Controls.module.css';

const Controls = ({ children }) => {
  return <div className={styles.controls}>{children}</div>;
};

export default Controls;
