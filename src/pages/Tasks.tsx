import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { TaskList } from '../components/TaskList/TaskList';
import { fetchTasks } from '../redux/tasks/operations';
import Spinner from '../components/Spinner/Spinner';
import { useAppDispatch } from '../redux/hooks';
import { selectLoading } from '../redux/tasks/slice';

export default function Tasks() {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <Spinner isLoading={isLoading} />
      <main>
        <Sidebar />
        <TaskList />
      </main>
    </HelmetProvider>
  );
}
