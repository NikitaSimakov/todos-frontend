import { deleteTask } from '../../redux/tasks/operations';
import css from './Task.module.scss';
import TaskIcons from '../TaskIcons/TaskIcons';
import { TaskEditor } from '../TaskEditor/TaskEditor';
import { useAppDispatch } from '../../redux/hooks';
import { TaskProps } from '../../@types/types';

export const Task = ({ _id, title, status, description }: TaskProps) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => dispatch(deleteTask(_id));

  return (
    <>
      <h3 className={css.title}>{title}</h3>
      <p className={css.description}>{description}</p>
      <TaskIcons status={status} id={_id} />
      <div className={css.buttonsBoxOperation}>
        <TaskEditor id={_id} />
        <button type="button" className={css.button} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
};
