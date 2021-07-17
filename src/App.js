import React from 'react';
import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Title from './Components/Title';
import Statistics from './Components/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { bad, good, neutral } = this.state;
    return bad + good + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good * 100) / total) : 0;
  };

  render() {
    const { bad, good, neutral } = this.state;
    const options = Object.keys(this.state);

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Section>
        <Title title="Please, leave your feedback" />

        {options.map(item => (
          <FeedbackOptions
            key={item}
            option={item}
            onLeaveFeedback={this.incrementFeedback}
          />
        ))}
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    );
  }
}

export default App;
