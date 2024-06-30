import { deleteTask } from '../../redux/tasks/operations';
import { TaskEditor, TaskIcons } from '../';
import { useAppDispatch } from '../../redux/hooks';
import { TaskProps } from '../../@types';
import { useNotification } from '../../hooks';
import css from './Task.module.scss';

export const Task = (task: TaskProps) => {
  const { _id, title, status, description } = task;
  const { addNotification } = useNotification();
  const dispatch = useAppDispatch();
  const handleDelete = () =>
    dispatch(deleteTask({ taskId: _id, addNotification }));

  return (
    <>
      <h3 className={css.title}>{title}</h3>
      <p className={css.description}>{description}</p>
      <TaskIcons status={status} id={_id} />
      <div className={css.buttonsBoxOperation}>
        <TaskEditor
          title={title}
          description={description}
          _id={_id}
          status={status}
        />
        <button type="button" className={css.button} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
};
