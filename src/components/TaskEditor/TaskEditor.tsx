import { useSelector } from 'react-redux';
import { updateTask } from '../../redux/tasks/operations';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Modal from '../Modal/Modal';
import css from './TaskEditor.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { selectAllTasks } from '../../redux/tasks/slice';

export const TaskEditor = ({ id }: { id: string }) => {
  const tasks = useSelector(selectAllTasks);
  const task = tasks.find(task => task._id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const dispatch = useAppDispatch();

  const handleClose = () => setIsModalOpen(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (title !== '' || description !== '') {
      dispatch(updateTask({ title, description, id }));
      form.reset();
      handleClose();
      return;
    }
    toast.error('Task or description cannot be empty. Enter some text!');
  };

  return (
    <>
      <button className={css.button} onClick={() => setIsModalOpen(true)}>
        Edit
      </button>
      {isModalOpen && (
        <Modal onClose={handleClose}>
          <form className={css.form} onSubmit={handleSubmit}>
            <input
              value={title}
              name="text"
              className={css.input}
              onChange={e => setTitle(e.target.value)}
            />
            <input
              value={description}
              name="text"
              className={css.input}
              onChange={e => setDescription(e.target.value)}
            />
            <button type="submit" className={css.button}>
              Edit task
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};
