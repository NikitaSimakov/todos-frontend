import { TaskButtonProps } from '../../@types';
import css from './TaskButton.module.scss';

export const TaskButton = ({ name, opener }: TaskButtonProps) => {
  return (
    <button className={css.button} onClick={() => opener(true)} type="button">
      {name}
    </button>
  );
};
