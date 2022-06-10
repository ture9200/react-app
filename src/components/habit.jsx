import React, { Component } from 'react';

 class Habit extends Component {
   //습관을 담는 habit 컨테이너
   /*state라는 멤버변수, count: 오브젝트 
   하나의 습관을 보여줄 수 있는 가장 작은 단위의 컴포넌트
      // 전달받은 습관의 데이터를 보여주기만 하는 컴포넌트 그래서 state 를 가지고 있을 필요는 전혀없다.  
      외부에서 props로 전달받은 습관, 이 habit이라는 오브젝트의 데이터를 보여주기만 하는 컴포넌트   */ 
 
  handleIncrement = () =>{
    this.props.onIncrement(this.props.habit); 
  } ; 
  //동작도 하지 않는 함수 . props으로 전달된 habit의 이름과 count를 보여주고 클릭이 되면 아무것도 하지 않는 함수를 호출 
  

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
   }; // 데이터 습관 감소 

  handleDelete = () =>{
    this.props.onDelete(this.props.habit);
   }; // 데이터 습관 삭제 

    render() {
      const {name,count} = this.props.habit;  // 전달된 데이터가 자동으로 props에 전달
      //외부로부터 받아온 데이터는 props라는 여기 클래스 안에 잇는 데이터에 저장된다. 
      //name,count변수에 this.props에 있는 habit 안에 있는 데이터가 name과 count라는 대신에 동일한 이름을 써야한다. 
      //habit안에 있는 name과 count라는 각데이터들이 온다.

      // 외부에서 props로 전달받은 습관, 이 habit이라는 오브젝트의 데이터를 보여주기만 하는 컴포넌트 
      //플러스 버튼이 클릭되면 함수 호출, 마이너스 버튼이 클릭되면 아래 컴포넌트안에 있는 멤버 함수를 호출 
      //외부에서 쓰고 있는 컴포넌트가 있다면 해당하는 habit을 이 컴포넌트로 전달해주고 각각 버튼들이 클릭외었을 때 , 
      // 어떤 일들을 하면 되는지 콜백함수들도 여기 컴포넌트로 전달 

    return (
    <li className="habit">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      2332333333333333333333311111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111        11111111111111111111111111111111111111111111111111111 2x222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
     <span className="habit-name"> {name}</span>
     <span className="habit-count"> {count}</span> 
     <button className="habit-button habit-increase" 
             onclick={this.handleIncrement}> 
       <i className="fas fa-plus-square"></i>
     </button>
     <button 
        className="habit-button habit-decrease" 
        onclick={this.handleDecrement}> 
      <i className="fas fa-minus-square"></i>
     </button>
     <button 
       className="habit-button habit-delete" 
       onClick={this.handleDelete}>
      <i className="fas fa-trash"></i>
     </button>
    </li>
    );
  }
}

export default Habit;
