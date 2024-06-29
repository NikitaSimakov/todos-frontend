import { updateTask } from '../../redux/tasks/operations';
import Modal from '../Modal/Modal';
import { useAppDispatch } from '../../redux/hooks';
import TaskForm from '../TaskForm/TaskForm';
import { TaskProps } from '../../@types/types';
import { TaskButton } from '../TaskButton/TaskButton';
import { useModal } from '../../hooks/useModal';

export const TaskEditor = ({ title, description, _id }: TaskProps) => {
  const { isModalOpen, open, close } = useModal();
  const dispatch = useAppDispatch();

  const handleSubmit = (title: string, description: string) => {
    dispatch(updateTask({ title, description, id: _id }));
  };

  return (
    <>
      <TaskButton name="Edit" opener={open} />
      {isModalOpen && (
        <Modal onClose={close}>
          <TaskForm
            onClose={close}
            onSubmit={handleSubmit}
            initialValue={{ title, description }}
          />
        </Modal>
      )}
    </>
  );
};
