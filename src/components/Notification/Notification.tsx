import React, { useEffect } from 'react';
import useTimeout from '../../hooks/useTimeout';
import css from './Notification.module.scss';

interface NotificationProps {
  id: number;
  message: string;
  removeNotification: (id: number) => void;
}

const Notification: React.FC<NotificationProps> = ({
  id,
  message,
  removeNotification,
}) => {
  const { start } = useTimeout(() => removeNotification(id), 2000);

  useEffect(() => {
    start();
  }, [start]);

  return (
    <div
      className={css.notification}
      key={id}
      onClick={() => removeNotification(id)}
    >
      {message}
    </div>
  );
};

export default Notification;
