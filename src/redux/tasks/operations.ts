import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type Task = {
  _id: string;
  title: string;
  description: string;
  status: 'pending' | 'done' | 'progress';
};

// GET @ /tasks
export const fetchTasks = createAsyncThunk<
  Task[],
  undefined,
  { rejectValue: string }
>('tasks/fetchAll', async (_, thunkAPI) => {
  try {
    const res = await axios.get('api/todos');
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

// POST @ /tasks
type TaskRequest = {
  title: string;
  description: string;
  status: 'pending' | 'done' | 'progress';
};

export const addTask = createAsyncThunk<
  Task,
  TaskRequest,
  { rejectValue: string }
>('tasks/addTask', async (taskRequest, thunkAPI) => {
  try {
    const response = await axios.post('api/todos', taskRequest);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

// DELETE @ /tasks/:id
export const deleteTask = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('tasks/deleteTask', async (taskId, thunkAPI) => {
  try {
    const response = await axios.delete(`api/todos/${taskId}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});
