import React from 'react';
import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

const Wheel = (props) => {
  const { activeCog, moveClockwise, moveCounterClockwise } = props;
  const currentLocation = [1, 2, 3, 4, 5, 6];
  
  return (
    <div id="wrapper">
      <div id="wheel">
        {currentLocation.map((num, index) => (
          <div
            key={num}
            className={index === activeCog ? 'cog active' : 'cog'}
            style={{ '--i': `${index}` }}
          >
            {index === activeCog ? 'B' : ''}
          </div>
        ))}
      </div>
      <div id="keypad">
        <button onClick={() => moveCounterClockwise()} id="counterClockwiseBtn">Counter clockwise</button>
        <button onClick={() => moveClockwise()} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state => {
  return {
    activeCog: state.wheel.activeCog
  }
})

export default connect(mapStateToProps, {
  moveClockwise,
  moveCounterClockwise
})(Wheel)
