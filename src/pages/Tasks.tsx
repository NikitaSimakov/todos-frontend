import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { TaskList } from '../components/TaskList/TaskList';
import { fetchTasks } from '../redux/tasks/operations';
import Spinner from '../components/Spinner/Spinner';
import { useAppDispatch } from '../redux/hooks';
import { selectLoading } from '../redux/tasks/slice';
import { Main } from '../components/Containers/Main';

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
