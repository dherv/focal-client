import { schema } from 'normalizr';

export const session = new schema.Entity('sessions');
export const arrayOfSessions = new schema.Array(session);