import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/tasks/operations';
import css from './Task.module.scss';
import { AppDispatch } from '../../redux/store';
import TaskIcon from '../TaskIcon/TaskIcon';

export const Task = ({
  id,
  text,
  status,
  description,
}: {
  id: string;
  text: string;
  status: string;
  description: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <div className={css.wrapper}>
      <h3 className={css.text}>{text}</h3>
      <p>{description}</p>
      <TaskIcon status={status} id={id} />
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
