import { ThreeDots } from 'react-loader-spinner';
import style from './Spinner.module.scss';

export const Spinner = ({ isLoading }: { isLoading: boolean }) => {
  return isLoading ? (
    <div className={style.spinner}>
      <ThreeDots color="#4F2EE8" height={100} width={100} />
    </div>
  ) : null;
};
