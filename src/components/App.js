import React, { Component } from 'react';
import Container from './container';
import Title from './title';
import Controls from './controls';
import FeedbackOptions from './feedbackOptions';
import Statistics from './statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // --------------------  FUNCTIONS  --------------------

  incrementFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
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
  // ------------------------------------------------------

  render() {
    const { bad, good, neutral } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Title title="Please, leave your feedback" />

        <Controls>
          {options.map(item => (
            <FeedbackOptions
              key={item}
              option={item}
              onLeaveFeedback={this.incrementFeedback}
            />
          ))}
        </Controls>

        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Container>
    );
  }
}

export default App;
