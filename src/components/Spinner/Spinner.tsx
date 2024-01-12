import { ThreeDots } from 'react-loader-spinner';
import style from './Spinner.module.scss';

const Spinner = ({ isLoading }: { isLoading: boolean }) => {
  return isLoading ? (
    <div className={style.spinnerContainer}>
      <div className={style.spinner}>
        <ThreeDots color="#4F2EE8" height={100} width={100} />
      </div>
    </div>
  ) : null;
};
export default Spinner;
