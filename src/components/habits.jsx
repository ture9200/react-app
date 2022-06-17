import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddform';

class Habits extends Component {
  //컴포넌트가 업데이트 될때마다 호출한다. 
  componentDidUpdate() {
   
  }

  render() {
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
