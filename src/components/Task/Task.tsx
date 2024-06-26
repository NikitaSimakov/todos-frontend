import { deleteTask } from '../../redux/tasks/operations';
import css from './Task.module.scss';
import TaskIcons from '../TaskIcons/TaskIcons';
import { TaskEditor } from '../TaskEditor/TaskEditor';
import { useAppDispatch } from '../../redux/hooks';
import { useNotification } from '../../components/NotificationContext';

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
  const { addNotification } = useNotification();
  const handleDelete = () => {
    try {
      dispatch(deleteTask(id));
      addNotification('Successful task delete');
    } catch (error) {
      addNotification('Please try again');
    }
  };

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
