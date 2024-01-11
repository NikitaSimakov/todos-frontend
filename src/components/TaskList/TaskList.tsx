import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { selectAllTasks } from '../../redux/tasks/selectors';
import css from './TaskList.module.scss';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);
  return (
    <ul className={css.list}>
      {tasks.map(({ _id: id, title, status, description }) => (
        <li key={id}>
          <Task
            id={id}
            text={title}
            status={status}
            description={description}
          />
        </li>
      ))}
    </ul>
  );
};
