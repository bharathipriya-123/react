import React, { useState } from 'react';
//usestate allows you to add state to a functional component
function TodoList() {
    //current state and updated function
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [filter, setFilter] = useState('all');

    const handleAddTodo = () => {
        const newTodoItem = { text: newTodo, completed: false };
        setTodos([...todos, newTodoItem]);
        setNewTodo('');
    };

    const handleToggleComplete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    
    const handleRemoveTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    const handleEditTodo = (index, newText) => {
        const updatedTodos = [...todos];
        updatedTodos[index].text = newText;
        setTodos(updatedTodos);
      };
    

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredTodos = () => {
        switch (filter) {
            case 'all':
                return todos;
            case 'completed':
                return todos.filter((todo) => todo.completed);
            case 'active':
                return todos.filter((todo) => !todo.completed);
            default:
                return todos;
        }
    };

    return (
        <div className="todo-list">
            <h1>TODO LIST</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(event) => setNewTodo(event.target.value)}
                placeholder="Add new todo"
            />
            <button  id="todobtn"onClick={handleAddTodo}>Add Todo</button>

            <ul>
                {filteredTodos().map((todo, index) => (
                    <li key={index} className={todo.completed ? 'todo-item completed' : 'todo-item'}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleComplete(index)}
                            className="checkbox"
                        />
                        <span>{todo.text}</span>
                        <button  id="removebtn" onClick={() => handleRemoveTodo(index)}>Remove</button>
                        <button  id="editbtn"  onClick={() => handleEditTodo(index, prompt('Edit Todo:'))}>Edit</button>

                    </li>
                ))}
            </ul>

            <select value={filter} onChange={handleFilterChange} className="filter-select">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="active">Active</option>
            </select>
        </div>
    );
}

export default TodoList;



