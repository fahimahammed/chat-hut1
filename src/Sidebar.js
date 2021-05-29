import React, { useEffect, useState } from 'react';
import"./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import SettingsIcon from '@material-ui/icons/Settings';
import { useSelector } from 'react-redux';
import {selectUser} from "./features/userSlice";
import db, {auth} from "./firebase";
 
 

const Sidebar = () => {
    const user= useSelector  (selectUser);
    const [channels,setChannels] = useState ([]);
    useEffect (() =>{
        db.collection("channels").onSnapshot ((snapshot) => 
        setChannels(
            snapshot.docs.map((doc) =>({
                id:doc.id,
            channel:doc.data(),
        }))
        )
        );
    },[]);
    const handleAddChannel= () =>{
        const channelName =prompt ("Enter a new channel name: ");
        if(channelName){
            db.collection("channels").add({
                channelName:channelName,
            });
        }
    };
    return (
        <div className="sidebar">
           <div className="sidebar_top">
                <h3>Clever Programmer</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                    <ExpandMoreIcon/>
                    <h4>Text Channels</h4>
                </div>
                <AddIcon  className="sidebar__addChannel"/>
                </div>
                <div className="sidebar__channelsList">
                    {channels.map((id,channel) =>(
                          <SidebarChannel
                          key={id}
                          id={id}
                          channelName={channel.channelName}/> 

                    ))}
              
                

                 </div>
            </div>
        <div className="sidebar__voice">
            <SignalCellularAltIcon
            className="sidebar__voiceIcon"
            fontSize="large"
            />
            <div className="sidebar_voiceInfo">
                <h3>Voice Connected</h3>
                <p>Stream</p>
            </div>
        <div className="sidebar__voiceIcons">
            <InfoIcon/>
            <CallIcon/>
        </div>
        </div>
    <div className ="sidebar__profile">
        <div className="sidebar__profileInfo">
           
            
            <h3>{user.displayName}</h3>
            <p>#{user.uid.substring(0, 5)}</p>
        </div>
        <div className="sidebar__profileIcons">
         <MicIcon/>  
<HeadsetMicIcon/>  
<SettingsIcon/>  

        </div>

    </div>
    </div>
    );
};

export default Sidebar;