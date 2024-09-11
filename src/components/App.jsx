// import { Component } from 'react';
import { GlobalStyled } from './GlobalStyled';
import { Layout } from './Layout/Layout';
import { Statistic } from './Statistic/Statistic';
import { PageStyled } from './PageStyled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions ';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { useState } from 'react';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / countTotalFeedback());

  const { good, bad, neutral } = feedback;

  return (
    <Layout>
      <PageStyled>
        <Section title="Please leave feedback">
          <div>
            <FeedbackOptions
              options={Object.keys(feedback)}
              onLeaveFeedback={onLeaveFeedback}
            />
          </div>
        </Section>

        <Section title="Statistic">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </PageStyled>
      <GlobalStyled />
    </Layout>
  );
};
