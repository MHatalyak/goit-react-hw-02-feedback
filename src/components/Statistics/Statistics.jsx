import React from 'react';
import PropTypes from 'prop-types';

import { StatisticsContainer, Statistic } from '../App.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsContainer>
    <Statistic>Good: {good}</Statistic>
    <Statistic>Neutral: {neutral}</Statistic>
    <Statistic>Bad: {bad}</Statistic>
    <Statistic>Total: {total}</Statistic>
    <Statistic>Positive feedback: {positivePercentage}%</Statistic>
  </StatisticsContainer>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
