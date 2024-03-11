import React from 'react';


const TodoItems = (props) => {
 

  const handleCheckboxClick = () => {
    props.taskCompletedFun(); // Call the taskCompletedFun when checkbox is clicked
  };

  
  const editTask = () => {
    props.editTask(props.id);
  }
  const listItemStyle1 = {
    textDecoration: props.taskCompleted ? 'line-through' : 'none' // Apply line-through if taskCompleted is true
  };

 

  return (
    <div className="flex justify-between  items-center border my-4 py-4 px-2 rounded" >
           
      <div className="flex justify-start items-center mr-12 ">
        <input type="checkbox" onClick={handleCheckboxClick} className="rounded-2xl w-4 h-4 mr-3 "/>
        <p style={listItemStyle1} className='text-justify'>
          {props.value}
        </p>
      </div>
     <div className="flex items-center">
     <button  onClick={props.deleteTask} className="mx-2 px-4 py-2 text-white text-sm bg-red-600 rounded">Delete</button>
      <button  onClick={editTask} className="mx-2 px-4 py-2 text-white text-sm bg-blue-700 rounded">Edit</button>
      
     </div>
    </div>
  );
};

export default TodoItems;
