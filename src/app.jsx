import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
      //습관들을 갖고있는 배열의 데이터 
    //habits 라는 배열이 있고 안에 오브젝트 데이터가 있다. 
    //각각의 습관들을 Habit 컴포넌트로 전달해서 이렇게 보여주는것 
    //우리가 부모 컨포넌트로부터 전달받은 props 으로 습관들이 전달
    // state = 데이터를 가지고 있는 곳 
    state = { 
        habits:[
            {id:1, name:'Reading' , count: 0 },
            {id:2, name:'Running' , count: 0 },
            {id:3, name:'Coding' , count: 0 },
        ],

        
    };

    handleIncrement = habit =>{ //handleIncrement라는 변수는 함수를 가리키고 있다. 
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits});
     } ; //
     
   
     handleDecrement = habit =>{
       const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count -1;
        habits[index].count = count < 0 ?0:count;
        this.setState({habits});
     } ;
   
     handleDelete = habit => {  //Delete을 이렇게 콜백함수들을 props으로 전달해줌. 
       const habits = this.state.habits.filter(item => item.id !== habit.id);
       this.setState({habits});
     };
      
     handleAdd = name =>{ //이름을 받아서 그이름에 맞는 새로운 습관을 state에 추가 
          const habits = [...this.state.habits,{id: Date.now(), name, count:0 }] 
          this.setState ({habits});
          //state에 있는 habits =spread operator 
          // habits에 있는 아이템들을 하나하나씩 새로운 배열에 복사 후
          // 자 주어진 이름을 이용해서 새로운 habit도  만들
          // Date.now() => 현재 날짜와 시간, 초를 합해서 만들어줌 
     };

     handleReset= () => {
         const habits = this.state.habits.map(habit => {
          habit.count =0; 
          return habit; 
         });
         this.setState({habits});
        };

      //totalcount중에 현재 진행중인 count가 0이상인 아이들을 filter해서 배열이 생성해 그것의 길이를 전달 
      render() {
        return (
          <>
            <Navbar
              totalCount={this.state.habits.filter(item => item.count > 0).length}
            />
            <Habits
              habits={this.state.habits}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onAdd={this.handleAdd}
              onReset={this.handleReset}
            />
          </>
        );
      }
    }

export default App;
