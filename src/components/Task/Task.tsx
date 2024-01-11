import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/tasks/operations';
import css from './Task.module.scss';
import { AppDispatch } from '../../redux/store';

export const Task = ({ id, text }: { id: string; text: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
