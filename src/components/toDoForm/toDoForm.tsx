// TodoForm.tsx
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

function TodoForm({ onAddTodo }: TodoFormProps){
  const [newTodo, setNewTodo] = useState('');

  function handleAddTodo(): void {
    if (newTodo.trim() !== '') {
      onAddTodo(newTodo);
      setNewTodo('');
    }
  }

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={8}>
        <TextField
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          label="Add a new todo"
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <Button 
          variant="contained" 
          onClick={handleAddTodo} 
          fullWidth 
          style={{ 'minHeight': '56px' }}>
          Add Todo
        </Button>
      </Grid>
    </Grid>
  );
}

export default TodoForm;
