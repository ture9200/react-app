import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddform';


class Habits extends Component {
 /*
  handleIncrement = habit =>{ //handleIncrement라는 변수는 함수를 가리키고 있다. 
    this.props.onIncrement(habit); // props에 전달된 onIncrement의 habit을 전달
  } ; //
  

  handleDecrement = habit =>{
    this.props.onDecrement(habit);
  } ;

  handleDelete = habit => {  //Delete을 이렇게 콜백함수들을 props으로 전달해줌. 
    this.props.onDelete(habit);
  };
  
  handleAdd = name => { //handleAdd에 이름이 오면 
     this.props.onAdd(name); //이름을 전달 
  }
*/
  render() { //배열을 돌면서 각각의 습관들을 이 습관 컴포넌트에 연결 후 변경해서 보여준다. 
    return(
      <div className = "habits">
      <HabitAddForm onAdd={this.props.onAdd} />
         <ul> 
    { this.props.habits.map(habit => (
        <Habit 
        key = {habit.id} 
        habit={habit} //habit 이라는 컴포넌트에 habit이라는 오브젝트를 전달, habit이라는 prop이름에 우리가 각각의 habit을 이 괄호 habit에 전달 
        onIncrement={this.props.onIncrement}//함수 내  handleIncrement 라는 함수를 호출해 handleIncrement라는 함수를 콜백함수로 전달 
        onDecrement={this.props.onDecrement}
        onDelete={this.props.onDelete}
        />
         //보여줘야할 습관이라는 데이터,특정이벤트가 발생하면 전달해준 콜백함수  
         // 플러스버튼을 누르면 OnIncrement라는 내가 prop이름으로 전달한 이 콜백함수를 호출하고 
         // -버튼을 누르면 onDecrement라는 prop으로 전달된 이 콜백함수를 호출하고
         // 삭제가 되는 이벤트가 발생하면 ondelete를 호출  
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