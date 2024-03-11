
import { nanoid } from 'nanoid'

export default function Input(props){

    function handleChange(event){
        props.setInput(event.target.value);
    
    }
    function addTask(){
        if(props.input.trim() !== ""){
            let item = {id:nanoid(), task:props.input, taskCompleted:false};
            props.setTasks([item, ...props.tasks]);
            props.setInput("");
        }
    }
    function editTask(){
       let item={...props.edit, task:props.input};
       props.setTasks([item, ...props.tasks]);
            props.setInput("");
            props.setEdit(null);
    }
    
    return(
        <div>
            <input 
            type="text" 
            placeholder="Enter Task"
            onChange={handleChange} 
            value={props.input}
            className="px-8 py-3 rounded outline-none border-2 border-gray"
            
            />
            {props.edit ? <button className="mx-3 px-4 py-2 text-white text-lg bg-blue-700 rounded"  onClick={editTask}>Update</button>: <button className="mx-3 px-4 py-2 text-white text-lg bg-blue-700 rounded" onClick={addTask}>Save</button>}

        </div>
    )
}