export interface IFocus {
  id: string;
  text: string;
  completed: boolean;
}

export interface ISession {
  id?: string;
  memo: string;
  rating: number;
  date?: Date
  focusId: number;
}
