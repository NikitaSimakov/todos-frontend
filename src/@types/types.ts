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

export type Task = {
  _id: string;
  title: string;
  description: string;
  status: 'pending' | 'done' | 'progress';
};

export type TasksState = {
  items: Task[];
  isLoading: boolean;
  error: string | null;
};

export type TaskRequest = {
  title: string;
  description: string;
  status: 'pending' | 'done' | 'progress';
};
