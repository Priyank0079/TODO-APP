import React, { useRef } from 'react'
import Buttons from './Buttons'

function AddTodo({addTodoItem}) {

  const todoTextInput = useRef();
  const todoDateInput = useRef();

  const addHandler = () =>{
    const todoText=todoTextInput.current.value;
    const toDate =todoDateInput.current.value;
    todoTextInput.current.value=''
    todoDateInput.current.value=''
    addTodoItem( todoText,toDate);
  }

 


  return (
    <div>
      

      <div className="container text-center">
 
 <div className="row">
   <div className="col-5"><input type="text" className="form-control" placeholder="Enter Todo here"  aria-describedby="basic-addon1" ref={todoTextInput}/></div>
   <div className="col-3"> <input type="date" ref={todoDateInput} className="form-control"   aria-describedby="basic-addon1"/></div>
   <div className="col-2"> <Buttons  btnType="success" btnText="Add" handler={addHandler}  /></div>
 </div>
</div>


    </div>
  )
}

export default AddTodo
