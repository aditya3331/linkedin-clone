import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css'

function Sidebar() {

    const user = useSelector(selectUser)
    const recentItem = (topic) => (
        <div className = 'sidebar__recentItem'>
            <span className = 'sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className = 'sidebar'>
            <div className = 'sidebar__top'>
                <img src = 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
                    alt = ''
                />
                <Avatar src ={user.photoUrl} className = 'sidebar__avatar'>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>tripathi.aditya196@gmail.com</h4>
            </div>

            <div className = 'sidebar__stats'>
                <div className =  'sidebar__stat'>
                    <p>Who viwed you</p>
                    <p className = 'sidebar__statNumber'>2,543</p>

                </div>
                <div className = 'sidebar__stat'>
                    <p>View on post</p>
                    <p className = 'sidebar__statNumber'>2,443</p>

                </div>
            </div>

            <div className = 'sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('Programing')}
                {recentItem('Philosophy')}
                {recentItem('reading')}
            </div>
            
        </div>
    )
}

export default Sidebar
