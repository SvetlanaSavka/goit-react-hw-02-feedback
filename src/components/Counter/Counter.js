import React from 'react';
import Controls from './Controls';
import Value from './Value';
import { Countercontrols, Button } from './Counter.styled';

class Counter extends React.Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div>
        <Value value={this.state.value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecremenr={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
