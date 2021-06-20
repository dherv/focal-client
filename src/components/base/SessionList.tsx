import { FC } from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import { getAllSessions } from '../../features/session/sessionReducer';
import { ISessionEntity } from '../../types/interfaces';
import { Session } from './Session';

const SessionList: FC<{ sessions: ISessionEntity[] }> = ({ sessions }) => {
  return (
    <ul>
      {sessions.map(({id, memo, rating, focus}) => (
        <Session
        key={id}
          memo={memo}
          rating={rating}
          date="2021/07/01"
          focusName={focus.text}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    sessions: getAllSessions(state),
  };
};
export default connect(mapStateToProps)(SessionList);
