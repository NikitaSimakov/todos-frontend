import { TbDeviceIpadQuestion } from 'react-icons/tb';
import { TbDeviceIpadUp } from 'react-icons/tb';
import { TbDeviceIpadStar } from 'react-icons/tb';
import css from './TaskIcon.module.scss';
import { updateStatusTask } from '../../redux/tasks/operations';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';

type Props = {
  status: string;
  id: string;
};

const icons = [
  { iconId: 1, buttonStatus: 'pending', icon: <TbDeviceIpadQuestion /> },
  { iconId: 2, buttonStatus: 'progress', icon: <TbDeviceIpadUp /> },
  { iconId: 3, buttonStatus: 'done', icon: <TbDeviceIpadStar /> },
];

const TaskIcon = ({ status, id }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
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

export default TaskIcon;
