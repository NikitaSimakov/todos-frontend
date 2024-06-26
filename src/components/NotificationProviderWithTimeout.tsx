import { ReactNode, useCallback, useEffect, useState } from 'react';
import {
  INotification,
  NotificationContext,
  setNotifyFunc,
} from '../components/NotificationContext';
import Notification from '../components/Notification/Notification';
import css from '../components/Notification/Notification.module.scss';

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider = ({
  children,
}: NotificationProviderProps): JSX.Element => {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  const removeNotification = useCallback((id: number) => {
    setNotifications(notifications =>
      notifications.filter(notification => notification.id !== id)
    );
  }, []);

  const addNotification = useCallback((message: string) => {
    const id = Date.now();
    setNotifications(notifications => [...notifications, { id, message }]);
  }, []);

  useEffect(() => {
    setNotifyFunc(addNotification);
  }, [addNotification]);

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      <div className={css.notificationContainer}>
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            id={notification.id}
            message={notification.message}
            removeNotification={removeNotification}
          />
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
};
