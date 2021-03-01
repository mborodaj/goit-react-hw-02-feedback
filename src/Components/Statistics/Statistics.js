import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.statisticsList}>
      <li className={styles.statisticsListItem}>
        Good: <span className={styles.textOrange}>{good}</span>
      </li>
      <li className={styles.statisticsListItem}>
        Neutral: <span className={styles.textOrange}>{neutral}</span>
      </li>
      <li className={styles.statisticsListItem}>
        Bad: <span className={styles.textOrange}>{bad}</span>
      </li>
      <li className={styles.statisticsListItem}>
        Total: <span className={styles.textOrange}>{total}</span>
      </li>
      <li className={styles.statisticsListItem}>
        Positive feedback:{' '}
        <span className={styles.textOrange}>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
