import React from 'react';

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

export default Statistics;
