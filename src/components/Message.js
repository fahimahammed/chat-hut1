import React from 'react';
import { Avatar } from '@material-ui/core';
import '../styles/Message.css';

function Message({ message, timestamp, user }) {
  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message__info">
        <h4>
          {user.displayName}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>

        <p className='message-style'>{message}</p>
      </div>
    </div>
  );
}

export default Message;
