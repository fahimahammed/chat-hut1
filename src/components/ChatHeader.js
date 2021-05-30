import React from 'react';
import {
  EditLocationRounded,
  HelpRounded,
  Notifications,
  PeopleAltRounded,
  SearchRounded,
  SendRounded,
} from '@material-ui/icons';
import ChatIcon from '@material-ui/icons/Chat';
import '../styles/ChatHeader.css';

const ChatHeader = ({ channelName }) => {
  return (
    <div className="chatHeader">
      <div className="chatHeader-left">
        <h3>
          <span className="chatHeader-hash">
            <ChatIcon />
          </span>
          
          {channelName}
        </h3>
      </div>

      <div className="chatHeader-right">
        <Notifications />
        <EditLocationRounded />
        <PeopleAltRounded />

        <div className="chatHeader-search">
          <input placeholder="Search" type="text" />
          <SearchRounded />
        </div>

        <SendRounded />
        <HelpRounded />
      </div>
      
    </div>
    
  );
}

export default ChatHeader;
