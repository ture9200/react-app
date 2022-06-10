import React, { Component } from 'react'

class habitAddform extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();
     // Ref 오브젝트 생성 아래 inputRef에 전달
     // 리액트는 바로 dom요소에 접근하지 않고 필요할때는 이렇게 리액트에서 제공하는 createRef 라는 것을 이용해서 멤버 변수를 정의한다음에 그것을 원하는 해당하는 리액트 컴포넌트에  ref로 연결하면 된다 
    onSubmit = event => {
       event.preventDefault(); //브라우저의 기본기능을 취소해준다. 리프레쉬기능을 안하게 됨 
       const name= this.inputRef.current.value; 
       name && this.props.onAdd(name); //props에 전달된 onAdd라는 함수에 이름을 전달
      // this.inputRef.current.value = ''; //미리 입력한 것을 초기화 
       this.formRef.current.reset();
    }
  render() {

    return (
        // 제출하면 ONSUBMIT 
     <form ref = {this.formRef} className="add-form" onSubmit={this.onSubmit}>
       <input ref={this.inputRef}
        type="text" 
        className="add-input" 
        placeholder="Habit"
         />
      <button className = "add-button">Add</button>
     </form>
    )
  }
}

export default habitAddform;