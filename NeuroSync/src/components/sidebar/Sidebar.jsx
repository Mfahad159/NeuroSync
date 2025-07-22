import React from 'react'
import { assets } from '../../assets/assets.js'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
                <img className='menu' src={assets.menu_icon} alt="" />
                <div className='new-chat'>
                    <img src={assets.plus_icon} alt="" />
                    <p className='new-chat-title'>New Chat</p>
                </div>
                <div className='recent'>
                    <div className='recent-title'></div>
                    <div className='recent-entry'>
                        <img src={assets.message_icon} alt="" />
                        <p>What is React....</p>
                    </div>
                </div>
        </div>
        <div className='bottom'>
            <div>
                <img src={assets.question_icon} alt="" />
                <p>Help</p>
            </div>
            <div>
                <img src={assets.history_icon} alt="" />
                <p>History</p>
            </div>
            <div>
                <img src={assets.setting_icon} alt="" />
                <p>Settings</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar