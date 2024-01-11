import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasks/operations';
import css from './TaskEditor.module.scss';
import { AppDispatch } from '../../redux/store';
import { useState } from 'react';

export const TaskEditor = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    // const text = form.elements.text.value;
    if (title !== '') {
      dispatch(addTask({ title, description: 'blabla', status: 'pending' }));
      form.reset();
      return;
    }
    alert('Task cannot be empty. Enter some text!');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        name="text"
        className={css.input}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit" className={css.button}>
        Add task
      </button>
    </form>
  );
};
