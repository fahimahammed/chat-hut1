import React from 'react';
import { useDispatch } from 'react-redux';
import '../styles/SidebarChannel.css';

import { setChannelInfo } from '../slice/appSlice';

function SidebarChannel({ id, channelName }) {
  const dispatch = useDispatch();

  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel-hash">#</span>
        {channelName}
      </h4>
      <p>hello</p>
    </div>
  );
}

export default SidebarChannel;
