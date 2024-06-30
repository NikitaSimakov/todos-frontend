import { useSelector } from 'react-redux';
import { selectAllTasks } from '../../redux/tasks/slice';
import { TaskProps } from '../../@types';
import { TaskAdd } from '../';
import css from './Sidebar.module.scss';

export const Sidebar = () => {
  const tasks = useSelector(selectAllTasks);
  function getStatusCounts(tasks: TaskProps[]) {
    return tasks.reduce(
      (acc, task) => {
        if (task.status in acc) {
          acc[task.status]++;
        } else {
          acc[task.status] = 1;
        }
        return acc;
      },
      {
        pending: 0,
        progress: 0,
        done: 0,
      }
    );
  }
  const counts = getStatusCounts(tasks);

  return (
    <aside className={css.sidebar}>
      <h2>Task manager</h2>
      <TaskAdd />
      <ul className={css.infobox}>
        <li>Total Tasks: {tasks.length}</li>
        <li>Pending: {counts.pending}</li>
        <li>In Progress: {counts.progress}</li>
        <li>Done: {counts.done}</li>
      </ul>
    </aside>
  );
};
