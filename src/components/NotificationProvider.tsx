import { ReactNode, useCallback, useState } from 'react';
import { NotificationContext } from '../hooks';
import { NotificationType } from '../@types';

export const NotificationProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const removeNotification = useCallback((id: number) => {
    setNotifications(notifications =>
      notifications.filter(notification => notification.id !== id)
    );
  }, []);

  const addNotification = useCallback(
    (message: string) => {
      const id = Date.now();
      setNotifications(notifications => [...notifications, { id, message }]);
      setTimeout(() => removeNotification(id), 2000);
    },
    [removeNotification]
  );

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
