export type TypeUserResp = {
  token: string;
  user: {
    email: string;
    id: string;
    name: string;
  };
};
export type TypeUserReq = {
  email: string;
  name?: string;
  password: string;
};

export type TaskProps = {
  _id: string;
  title: string;
  description: string;
  status: 'pending' | 'done' | 'progress';
};

export type TasksState = {
  items: TaskProps[];
  isLoading: boolean;
  error: string | null;
};

export type TaskRequest = {
  title: string;
  description: string;
  status: 'pending' | 'done' | 'progress';
};

export type TaskFormProps = {
  onSubmit: (title: string, description: string) => void;
  onClose: () => void;
  initialValue?: { title: string; description: string };
};

export type TaskButtonProps = {
  name: string;
  opener: (value: React.SetStateAction<boolean>) => void;
};

export type TaskIconsProps = {
  status: string;
  id: string;
};

export type NotificationType = {
  id: number;
  message: string;
};

export type NotificationContextType = {
  notifications: NotificationType[];
  addNotification: (message: string) => void;
  removeNotification: (id: number) => void;
};
