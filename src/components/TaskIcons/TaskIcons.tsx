import { TbDeviceIpadQuestion } from 'react-icons/tb';
import { TbDeviceIpadUp } from 'react-icons/tb';
import { TbDeviceIpadStar } from 'react-icons/tb';
import { updateStatusTask } from '../../redux/tasks/operations';
import { useAppDispatch } from '../../redux/hooks';
import css from './TaskIcons.module.scss';

type Props = {
  status: string;
  id: string;
};

const icons = [
  { iconId: 1, buttonStatus: 'pending', icon: <TbDeviceIpadQuestion /> },
  { iconId: 2, buttonStatus: 'progress', icon: <TbDeviceIpadUp /> },
  { iconId: 3, buttonStatus: 'done', icon: <TbDeviceIpadStar /> },
];

const TaskIcons = ({ status, id }: Props) => {
  const dispatch = useAppDispatch();
  const markup = icons.map(({ buttonStatus, icon, iconId }) => (
    <button
      disabled={buttonStatus === status}
      onClick={() => dispatch(updateStatusTask({ id, status: buttonStatus }))}
      key={iconId}
      className={`${css[status]} ${css.button} ${
        status === buttonStatus ? css.active : ''
      }`}
    >
      {icon}
    </button>
  ));
  return <div className={css.buttonBox}>{markup}</div>;
};

export default TaskIcons;
