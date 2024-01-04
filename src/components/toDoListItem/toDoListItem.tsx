// TodoListItem.tsx
import React from 'react';
import { Checkbox, ListItem, ListItemText, IconButton } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import Todo from '../../types/toDoType';


type TodoProps = {
  todo: Todo;
  onToggleTodo: (id: number) => void;
  onRemoveTodo: (id: number) => void;
}

const useStyles = makeStyles({
  completed: {
    textDecoration: 'line-through',
  },
}) ;

function TodoListItem({ todo, onToggleTodo, onRemoveTodo }: TodoProps) {
  const classes = useStyles();

  return (
    <ListItem>
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggleTodo(todo.id)}
      />
      <ListItemText
        disableTypography
        primary={todo.title}
        className={todo.completed ? classes.completed : ''}
      />
      <IconButton onClick={() => onRemoveTodo(todo.id)} aria-label="Delete">
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}

export default TodoListItem;

