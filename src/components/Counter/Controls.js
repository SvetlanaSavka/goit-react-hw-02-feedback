import React from 'react';

const Controls = ({ onIncrement, onDecremenr }) => {
  <Countercontrols>
    <Button type="button" onClick={onIncrement}>
      Увеличить на 1
    </Button>
    <Button type="button" onClick={onDecremenr}>
      Уменьшить на 1
    </Button>
  </Countercontrols>;
};

export default Controls;
