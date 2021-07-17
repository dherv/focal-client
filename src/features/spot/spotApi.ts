import Api from '../../helpers/helpersApi';
import { ISpot } from '../../types/interfaces';

export const fetchSpots = () => Api.get("/spots");
export const postSpot = (name: string) => Api.post("/spots", { name });
export const putSpot = (spot: ISpot) =>
  Api.put(`/spots/${spot.id}`, spot);
export const deleteSpot = (id: string) => Api.delete(`/spots/${id}`);