import { Statistics, StatisticsSpan } from './Statistic.styled';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Statistics>
      {/* <h1>Statistic</h1> */}
      <StatisticsSpan>Good: {good}</StatisticsSpan>
      <StatisticsSpan>Netural: {neutral}</StatisticsSpan>
      <StatisticsSpan>Bad:{bad}</StatisticsSpan>
      <StatisticsSpan>Total: {total}</StatisticsSpan>
      <StatisticsSpan>
        Positive feedback:
        {total === 0 ? 0 : positivePercentage}%
      </StatisticsSpan>
    </Statistics>
  );
};
