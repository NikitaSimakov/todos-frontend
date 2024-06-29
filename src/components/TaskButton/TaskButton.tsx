import css from './TaskButton.module.scss';

export const TaskButton = ({
  name,
  opener,
}: {
  name: string;
  opener: (value: React.SetStateAction<boolean>) => void;
}) => {
  return (
    <button className={css.button} onClick={() => opener(true)} type="button">
      {name}
    </button>
  );
};
