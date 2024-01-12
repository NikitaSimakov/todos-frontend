import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Task, TaskRequest } from '../../@types/types';

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

export const addTask = createAsyncThunk<
  Task,
  TaskRequest,
  { rejectValue: string }
>('tasks/addTask', async (taskRequest, thunkAPI) => {
  try {
    const response = await axios.post('api/todos', taskRequest);
    toast.success('Successful task addition');
    return response.data;
  } catch (e) {
    toast.error('Fail task addition');
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

export const deleteTask = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('tasks/deleteTask', async (taskId, thunkAPI) => {
  try {
    const response = await axios.delete(`api/todos/${taskId}`);
    toast.success('Successful task delete');
    return response.data;
  } catch (e) {
    toast.error('Fail task delete');
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

export const updateTask = createAsyncThunk<
  Task,
  { id: string; description: string; title: string },
  { rejectValue: string }
>('tasks/updateTask', async (body, thunkAPI) => {
  try {
    const response = await axios.put(`api/todos/${body.id}`, {
      title: body.title,
      description: body.description,
    });
    toast.success('Successful task update');
    return response.data;
  } catch (e) {
    toast.error('Fail task update');
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

export const updateStatusTask = createAsyncThunk<
  Task,
  { id: string; status: string },
  { rejectValue: string }
>('tasks/updateStatus', async (body, thunkAPI) => {
  try {
    const response = await axios.patch(`api/todos/${body.id}`, {
      status: body.status,
    });
    toast.success(`Successful task status update for ${body.status}`);
    return response.data;
  } catch (e) {
    toast.error('Fail task status update');
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});
