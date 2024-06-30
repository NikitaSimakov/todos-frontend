import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { Sidebar, TaskList, Spinner } from '../components';
import { fetchTasks } from '../redux/tasks/operations';
import { useAppDispatch } from '../redux/hooks';
import { selectLoading } from '../redux/tasks/slice';
import { Main } from '../components';

export default function Tasks() {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Main>
      <Helmet title="Your tasks" />
      <Spinner isLoading={isLoading} />
      <Sidebar />
      <TaskList />
    </Main>
  );
}
