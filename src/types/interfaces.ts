export interface IFocus {
  id: string;
  text: string;
  completed: boolean;
}

export interface ISpot {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

export interface ISession {
  id?: string;
  memo: string;
  rating: number;
  focusId: string;
  date?: Date;
}

export interface ISessionEntity extends ISession {
  focus: IFocus;
}
