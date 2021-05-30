import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/Sidebar.css';
import { Avatar, Button } from '@material-ui/core';
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

import ForumIcon from '@material-ui/icons/Forum';

import db, { auth } from '../app/firebase';
import { selectUser } from '../slice/userSlice';

const Sidebar = () => {
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
      <img
          src="https://images.vexels.com/media/users/3/139911/isolated/preview/1afb4038427b2bd8edd275940aea269d-chat-service-icon-by-vexels.png"
          alt=""
        />
        <h3>Chat Hut</h3>
        <ExpandMore className="sidebar-expandMoreIcon" />
      </div>

      <div className="sidebar-channels">
        <div className="sidebar-channelsHeader">
          <div className="sidebar-header">
            <ForumIcon className="sidebar-expandMoreIcon" />
            <h3>Chat Groups</h3>
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
        <Avatar src={user.photo} />
        <div className="sidebar-profileInfo">
          <h3>{user.displayName}</h3>
          {/* <p>#{user.uid.substring(0, 5)}</p> */}
        </div>
      </div>

      <div className="sidebar-profileIcons">
          <Mic />
          <Headset />
          <Settings />
        </div>

      <div className="sign-out">
            <Button className='sign-out-button' onClick={() => auth.signOut()}>Sign Out</Button>
      </div>
    </div>
  );
}

export default Sidebar;
