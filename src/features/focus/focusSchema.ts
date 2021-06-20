import { schema } from 'normalizr';

export const focus = new schema.Entity('focuses');
export const arrayOfFocuses = new schema.Array(focus);