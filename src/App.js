import baseCss from './base.module.css';

import React, { Component } from 'react';
import SectionTitle from './Components/Section/Section';
import Statistics from './Components/Statistics/Statistics';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Notification from './Components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleFeedback = e => {
    const feedback = e.target.textContent;
    this.setState(prevFeedback => ({ [feedback]: prevFeedback[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let result = (this.state.good / (this.state.good + this.state.bad)) * 100;
    return `${Math.round(result)}`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();

    return (
      <>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.hendleFeedback}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification text="Please give your feedback" />
          )}
        </SectionTitle>
      </>
    );
  }
}

export default App;
