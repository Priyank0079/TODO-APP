// import React from 'react'
// import TodoItem from './TodoItem'

// function Todoitems({todoItems,deleteTodoItems}) {
   
//   return (
//     <div>
//        {todoItems.map(item => <TodoItem todoText={item.todoText} todoDate={item.todoDate} deleteTodoItems={deleteTodoItems}/>)}


//     </div>
//   )
// }

// export default Todoitems



import React from 'react';
import TodoItem from './TodoItem';

function Todoitems({ todoItems, deleteTodoItems }) {
  return (
    <div>
      {todoItems.map((item, index) => (
        <TodoItem 
          key={index}  // ✅ Add a unique key (use `item.id` if available)
          todoText={item.todoText} 
          todoDate={item.todoDate} 
            deleteTodoItems={() => deleteTodoItems(item.id)} 
        />
      ))}
    </div>
  );
}

export default Todoitems;

