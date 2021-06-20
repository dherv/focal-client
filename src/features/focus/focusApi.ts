import Api from '../../helpers/helpersApi';
import { IFocus } from '../../types/interfaces';

export const fetchFocuses = () => Api.get("/focuses");
export const postFocus = (text: string) => Api.post("/focuses", { text });
export const putFocus = (focus: IFocus) =>
  Api.put(`/focuses/${focus.id}`, focus);
export const deleteFocus = (id: string) => Api.delete(`/focuses/${id}`);
