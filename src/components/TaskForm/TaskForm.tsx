import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import css from './TaskForm.module.scss';
import { TaskFormProps } from '../../@types/types';

const TaskForm: React.FC<TaskFormProps> = ({
  onSubmit,
  onClose,
  initialValue,
}) => {
  const [title, setTitle] = useState(initialValue?.title || '');
  const [description, setDescription] = useState(
    initialValue?.description || ''
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title === '' || description === '') {
      toast.error('Task or description cannot be empty. Enter some text!');
      return;
    }
    onSubmit(title, description);
    setTitle('');
    setDescription('');
    onClose();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Task title"
        className={css.input}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        name="description"
        placeholder="Task description"
        className={css.input}
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit" className={css.submitButton}>
        Add task
      </button>
    </form>
  );
};

export default TaskForm;
