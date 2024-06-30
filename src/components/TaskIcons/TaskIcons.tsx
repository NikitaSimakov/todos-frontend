import {
  TbDeviceTabletPause,
  TbDeviceTabletCode,
  TbDeviceTabletCheck,
} from 'react-icons/tb';
import { updateStatusTask } from '../../redux/tasks/operations';
import { useAppDispatch } from '../../redux/hooks';
import css from './TaskIcons.module.scss';
import { TaskIconsProps } from '../../@types';

const icons = [
  { iconId: 1, buttonStatus: 'pending', icon: <TbDeviceTabletPause /> },
  { iconId: 2, buttonStatus: 'progress', icon: <TbDeviceTabletCode /> },
  { iconId: 3, buttonStatus: 'done', icon: <TbDeviceTabletCheck /> },
];

export const TaskIcons = ({ status, id }: TaskIconsProps) => {
  const dispatch = useAppDispatch();
  const markup = icons.map(({ buttonStatus, icon, iconId }) => (
    <button
      title={buttonStatus}
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
