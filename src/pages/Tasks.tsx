import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { TaskList } from '../components/TaskList/TaskList';
import { TaskEditor } from '../components/TaskEditor/TaskEditor';
import { fetchTasks } from '../redux/tasks/operations';
import { selectLoading } from '../redux/tasks/selectors';
import { AppDispatch } from '../redux/store';

export default function Tasks() {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
    </HelmetProvider>
  );
}
