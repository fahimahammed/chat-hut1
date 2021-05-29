import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/Sidebar.css';
import { Avatar } from '@material-ui/core';
import {
  Add,
  Call,
  ExpandMore,
  Headset,
  InfoOutlined,
  Mic,
  Settings,
  SignalCellularAlt,
} from '@material-ui/icons';

import SidebarChannel from '../components/SidebarChannel';

import db, { auth } from '../app/firebase';
import { selectUser } from '../slice/userSlice';

function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection('channels').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt('Enter a new channel name');

    if (channelName) {
      db.collection('channels').add({
        channelName,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h3>Chat Hut</h3>
        <ExpandMore className="sidebar-expandMoreIcon" />
      </div>

      <div className="sidebar-channels">
        <div className="sidebar-channelsHeader">
          <div className="sidebar-header">
            <ExpandMore className="sidebar-expandMoreIcon" />
            <h4>Text Channels</h4>
          </div>

          <Add onClick={handleAddChannel} className="sidebar-addChannelIcon" />
        </div>

        <div>
          {channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>
      {/* additional */}
      {/* <div className="sidebar-voice">
        <SignalCellularAlt className="sidebar-voiceIcon" fontSize="large" />

        <div className="sidebar-voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar-voiceIcons">
          <InfoOutlined />
          <Call />
        </div>
      </div> */}

      <div className="sidebar-profile">
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <div className="sidebar-profileInfo">
          <h3>{user.displayName}</h3>
          {/* <p>#{user.uid.substring(0, 5)}</p> */}
          <p>User</p>
        </div>

        <div className="sidebar-profileIcons">
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
