export interface IFocus {
  id: string;
  name: string;
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
  spotId: string;
  date?: Date;
  spot: ISpot;
  focus?: IFocus;
}

export interface ISessionEntity extends ISession {
  focus: IFocus;
  spot: ISpot;
}

export interface IUser {
  name: string;
  email: string;
}
