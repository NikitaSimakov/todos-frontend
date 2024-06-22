import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { selectAllTasks, selectLoading } from '../../redux/tasks/slice';
import css from './TaskList.module.scss';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);
  const loading = useSelector(selectLoading);
  return (
    <>
      {!loading && tasks.length === 0 && (
        <p className={css.empty}>The task list is empty. Please add tasks..</p>
      )}
      <ul className={css.list}>
        {tasks.map(({ _id: id, title, status, description }) => (
          <li key={id} className={css.item}>
            <Task
              id={id}
              title={title}
              status={status}
              description={description}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
