import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasks/operations';
import { AppDispatch } from '../../redux/store';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import css from './TaskEditor.module.scss';

export const TaskEditor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [status, setStatus] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => setIsModalOpen(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (title !== '') {
      dispatch(addTask({ title, description, status: 'pending' }));
      form.reset();
      handleClose();
      return;
    }
    alert('Task cannot be empty. Enter some text!');
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Add task</button>
      {isModalOpen && (
        <Modal onClose={handleClose}>
          <form className={css.form} onSubmit={handleSubmit}>
            <input
              name="text"
              className={css.input}
              onChange={e => setTitle(e.target.value)}
            />
            <input
              name="text"
              className={css.input}
              onChange={e => setDescription(e.target.value)}
            />
            <button type="submit" className={css.button}>
              Add task
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};
