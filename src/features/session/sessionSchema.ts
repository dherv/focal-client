import { schema } from 'normalizr';
import { focus } from '../focus/focusSchema';

export const session = new schema.Entity('sessions', {
  'focus': [focus]
});
export const arrayOfSessions = new schema.Array(session);