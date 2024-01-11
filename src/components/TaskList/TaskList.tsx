import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { selectAllTasks } from '../../redux/tasks/selectors';
import css from './TaskList.module.scss';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);
  console.log(tasks);
  return (
    <ul className={css.list}>
      {tasks.map(({ _id: id, title }) => (
        <li key={id}>
          <Task id={id} text={title} />
        </li>
      ))}
    </ul>
  );
};
