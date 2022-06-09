import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    //habits 라는 배열이 있고 안에 오브젝트 데이터가 있다. 
    //각각의 습관들을 Habit 컴포넌트로 전달해서 이렇게 보여주는것 
    // state = 데이터를 가지고 있는 곳 
    state = { 
        habits:[
            {id:1, name:'Reading' , count: 0 },
            {id:2, name:'Running' , count: 0 },
            {id:3, name:'Coding' , count: 0 },
        ],

        
    };

  handleIncrement = (habit) =>{ //handleIncrement라는 변수는 함수를 가리키고 있다. 
      this.props.onIncrement(habits.name);
  } ; //
  

  handleDecrement = (habit) =>{
    this.props.onDecrement(this.props.habit);
  } ;

  handleDelete = (habit) => {  //Delete을 이렇게 콜백함수들을 props으로 전달해줌. 
    this.props.onDelete(this.props.habit);
  };

  render() {
    return(
         <ul> 
    { this.state.habits.map(habit => (
        <Habit 
        key = {habit.id} 
        habit={habit} //habit 이라는 컴포넌트에 habit이라는 오브젝트를 전달, habit이라는 prop이름에 우리가 각각의 habit을 이 괄호 habit에 전달 
        onIncrement ={this.handleIncrement} //함수 내  handleIncrement 라는 함수를 호출해 handleIncrement라는 함수를 콜백함수로 전달 
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}/>
         //보여줘야할 습관이라는 데이터,특정이벤트가 발생하면 전달해준 콜백함수  
         // 플러스버튼을 누르면 OnIncrement라는 내가 prop이름으로 전달한 이 콜백함수를 호출하고 
         // -버튼을 누르면 onDecrement라는 prop으로 전달된 이 콜백함수를 호출하고
         // 삭제가 되는 이벤트가 발생하면 ondelete를 호출  
    ))}
    </ul>     
    );
  }
}

export default Habits;