import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../../redux/auth/operations';
import {
  fetchTasks,
  addTask,
  deleteTask,
  updateStatusTask,
  updateTask,
} from './operations';
import { TaskProps, TasksState } from '../../@types/types';

const initialState: TasksState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: TasksState) => {
  state.isLoading = true;
};

const handleRejected = (
  state: TasksState,
  {
    payload,
  }: {
    payload: any;
  }
) => {
  state.isLoading = false;
  state.error = payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  reducers: {},
  initialState,
  selectors: {
    selectLoading: state => state.isLoading,
    selectAllTasks: state => state.items,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task: TaskProps) => task._id === action.payload
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(updateTask.pending, handlePending)
      .addCase(updateTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item._id === action.payload._id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(updateStatusTask.pending, handlePending)
      .addCase(updateStatusTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item._id === action.payload._id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(updateStatusTask.rejected, handleRejected);
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { selectLoading, selectAllTasks } = tasksSlice.selectors;
