import { createContext, useContext } from 'react';

export interface INotification {
  id: number;
  message: string;
}

interface NotificationContextType {
  notifications: INotification[];
  addNotification: (message: string) => void;
  removeNotification: (id: number) => void;
}

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider'
    );
  }
  return context;
};

let globalNotify: (message: string) => void;

export const setNotifyFunc = (callback: (message: string) => void) => {
  globalNotify = callback;
};

export const notify = (message: string) => {
  if (globalNotify) {
    globalNotify(message);
  }
};
