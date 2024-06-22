import { deleteTask } from '../../redux/tasks/operations';
import css from './Task.module.scss';
import TaskIcons from '../TaskIcons/TaskIcons';
import { TaskEditor } from '../TaskEditor/TaskEditor';
import { useAppDispatch } from '../../redux/hooks';

export const Task = ({
  id,
  title,
  status,
  description,
}: {
  id: string;
  title: string;
  status: string;
  description: string;
}) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <>
      <h3 className={css.text}>{title}</h3>
      <p>{description}</p>
      <TaskIcons status={status} id={id} />
      <div className={css.buttonsBoxOperation}>
        <TaskEditor id={id} />
        <button type="button" className={css.button} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
};
