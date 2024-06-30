import { addTask } from '../../redux/tasks/operations';
import { Modal } from '../';
import { useAppDispatch } from '../../redux/hooks';
import { TaskForm, TaskButton } from '../';
import { useModal } from '../../hooks';

export const TaskAdd = () => {
  const { isModalOpen, open, close } = useModal();
  const dispatch = useAppDispatch();

  const handleSubmit = (title: string, description: string) => {
    dispatch(addTask({ title, description, status: 'pending' }));
  };

  return (
    <>
      <TaskButton name="Add new task" opener={open} />
      {isModalOpen && (
        <Modal onClose={close}>
          <TaskForm onSubmit={handleSubmit} onClose={close} />
        </Modal>
      )}
    </>
  );
};
