import { ReactNode, useCallback, useState } from 'react';
import { INotification, NotificationContext } from '../hooks/useNotification';

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
