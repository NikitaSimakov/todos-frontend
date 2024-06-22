import { addTask } from '../../redux/tasks/operations';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import css from './TaskAdd.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { toast } from 'react-hot-toast';

export const TaskAdd = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();

  const handleClose = () => setIsModalOpen(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitle('');
    setDescription('');
    const form = e.currentTarget;
    if (title !== '' && description !== '') {
      dispatch(addTask({ title, description, status: 'pending' }));
      form.reset();
      handleClose();
      return;
    }
    toast.error('Task or description cannot be empty. Enter some text!');
  };

  return (
    <>
      <button className={css.button} onClick={() => setIsModalOpen(true)}>
        Add new task
      </button>
      {isModalOpen && (
        <Modal onClose={handleClose}>
          <form className={css.form} onSubmit={handleSubmit}>
            <input
              name="text"
              placeholder="Task title"
              className={css.input}
              onChange={e => setTitle(e.target.value)}
            />
            <input
              name="text"
              placeholder="Task description"
              className={css.input}
              onChange={e => setDescription(e.target.value)}
            />
            <button type="submit" className={css.submitButton}>
              Add task
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};
