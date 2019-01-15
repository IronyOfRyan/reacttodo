import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo, hoverOver } from "../actions/index";
import TodoButtons from './TodoButtons.jsx'
import { ListItem, Checkbox, ListItemText, List } from '@material-ui/core/';
import ClearSelected from './ClearSelected.jsx'

function mapStateToProps(state) {
    return { todos: state.todos, hovered: state.todos.hovered };
};

function mapDispatchToProps(dispatch) {
    return {
        deleteTodo: todos => dispatch(deleteTodo(todos)),
        toggleTodo: todos => dispatch(toggleTodo(todos)),
        hoverOver: todos => dispatch(hoverOver(todos)),
    };
}

const TodoList = ({ todos, deleteTodo, toggleTodo, hoverOver }) => (

    <List style={{
        width: '800px', margin: '0 auto'
    }}>
        <div style={{ marginLeft: '10px', height: '50px' }}>
            <ClearSelected />
        </div>

        {
            todos.map((todo) => (

                <ListItem
                    onMouseEnter={() => hoverOver(todo.id)}
                    onMouseLeave={() => hoverOver(todo.id)}
                    key={todo.id}
                    style={{ margin: '10px', backgroundColor: 'lightgrey' }}
                    className="todo-li">
                    <Checkbox style={{ backgroundColor: 'rgb(141, 44, 44)' }} color="default" checked={todo.isCompleted} onChange={() => toggleTodo(todo.id)} />
                    {' '}
                    < ListItemText
                        size='50'
                        primary={todo.task}
                        style={{
                            textDecoration: todo.isCompleted ? 'line-through' : 'none',
                            opacity: todo.isCompleted ? '.3' : '1',
                        }}
                    />
                    {' '}
                    {todo.hovered ?
                        <TodoButtons
                            id={todo.id}
                            deleteTodo={deleteTodo}
                            todo={todo.id}
                        />
                        : null
                    }
                </ListItem>
            ))
        }

    </List >
);

const TodoContent = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoContent;