import { Component } from 'react';
import { GlobalStyled } from './GlobalStyled';
import { Layout } from './Layout/Layout';
import { Statistic } from './Statistic/Statistic';
import { PageStyled } from './PageStyled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions ';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Layout>
        <PageStyled>
          <Section title="Please leave feedback">
            <div>
              <FeedbackOptions
                options={Object.keys(this.state)}
                onLeaveFeedback={this.onLeaveFeedback}
              />
            </div>
          </Section>

          <Section title="Statistic">
            {total === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistic
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            )}
          </Section>
        </PageStyled>
        <GlobalStyled />
      </Layout>
    );
  }
}
