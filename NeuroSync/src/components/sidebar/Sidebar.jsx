import { useState } from 'react'
import React from 'react'
import { assets } from '../../assets/assets.js'
import './Sidebar.css'
const Sidebar = () => {

    const [extended, setExtended] = React.useState(false);
    const handle_exetrended = () => {
        setExtended(!extended);
    }
  return (
   <div className={`sidebar ${extended ? 'sidebar-extended' : 'sidebar-collapsed'}`}>
  <div className="top">
    <img className='menu' onClick={handle_exetrended} src={assets.menu_icon} alt="" />
    <div className='new-chat'>
      <img src={assets.plus_icon} alt="" />
      {extended && <p>New Chat</p>}
    </div>
    {extended &&
      <div className='recent'>
        <div className='recent-title'></div>
        <div className='recent-entry'>
          <img src={assets.message_icon} alt="" />
          <p>What is React....</p>
        </div>
      </div>
    }
  </div>

  {extended &&
    <div className='bottom'>
      <div className='bottom-item recent-entry'>
        <img src={assets.question_icon} alt="" />
        <p>Help</p>
      </div>
      <div className='bottom-item recent-entry'>
        <img src={assets.history_icon} alt="" />
        <p>History</p>
      </div>
      <div className='bottom-item recent-entry'>
        <img src={assets.setting_icon} alt="" />
        <p>Settings</p>
      </div>
    </div>
  }
</div>

  )
}

export default Sidebar