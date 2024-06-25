import { useSelector } from 'react-redux';
import { selectAllTasks } from '../../redux/tasks/slice';
import { Task } from '../../@types/types';
import css from './Sidebar.module.scss';
import { TaskAdd } from '../TaskAdd/TaskAdd';

export const Sidebar = () => {
  const tasks = useSelector(selectAllTasks);
  function getStatusCounts(tasks: Task[]) {
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
      <div className={css.infobox}>
        <p>Total Tasks: {tasks.length}</p>
        <p>Pending: {counts.pending}</p>
        <p>In Progress: {counts.progress}</p>
        <p>Done: {counts.done}</p>
        <TaskAdd />
      </div>
    </aside>
  );
};
