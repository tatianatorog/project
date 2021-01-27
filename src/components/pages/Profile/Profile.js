import React, { useContext } from 'react';
import UserHeader from '../../UserHeader/UserHeader';
import UserInput from '../../fields/UserInput';
import './Profile.scss';
import { AppContext } from '../../../utils/useContext';

export default function Profile() {
  const { user } = useContext(AppContext);

  return (
    <>
      <div className="user-settings">
        {Object.keys(user).length > 0 ? (
          <>
            <UserHeader user={user} />
            <UserInput user={user} />

          </>
        ) : null}
      </div>
    </>
  );
}
