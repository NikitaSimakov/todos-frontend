import { FC } from 'react';
import { useNotification } from '../../hooks/useNotification';
import css from './Notification.module.scss';

const Notifications: FC = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className={css.notificationContainer}>
      {notifications.map(notification => (
        <div
          className={css.notification}
          key={notification.id}
          onClick={() => removeNotification(notification.id)}
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default Notifications;