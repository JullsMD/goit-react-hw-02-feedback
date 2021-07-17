import styles from './Section.module.css';

const Section = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Section;
