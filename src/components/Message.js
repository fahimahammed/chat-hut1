import React from 'react';
import { Avatar } from '@material-ui/core';
import '../styles/Message.css';

const Message = ({ message, timestamp, user }) => {
  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message-info">
        <h4>
          {user.displayName}
          <span className="message-timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>

        <p className='message-style'>{message}</p>
      </div>
    </div>
  );
}

export default Message;
