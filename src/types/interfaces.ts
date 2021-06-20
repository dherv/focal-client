export interface IFocus {
  id: string;
  text: string;
  completed: boolean;
}

export interface ISession {
  id?: string;
  memo: string;
  rating: number;
  focusId: string;
  date?: Date
}

export interface ISessionEntity extends ISession {
  focus: IFocus
}
