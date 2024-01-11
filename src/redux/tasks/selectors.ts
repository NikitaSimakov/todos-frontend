import { RootState } from '../store';

export const selectLoading = (state: RootState) => state.tasks.isLoading;

// export const selectFilter = (state: RootState) => state.tasks.filter;

export const selectAllTasks = (state: RootState) => state.tasks.items;
