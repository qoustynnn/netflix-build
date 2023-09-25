import React from 'react'
import './ProfileScreen.css';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';
import { selectUser } from '../features/counter/userSlice';
import Nav from '../components/nav';

function ProfileScreen() {

  const user = useSelector(selectUser)

  return (
    <div className='profile-screen'>
        <Nav/>
        <div className='profile-screen-body'>
          <h1>Edit Profile</h1>
          <div className='profile-screen-info'>
            <img src='https://i.pinimg.com/236x/fe/85/b7/fe85b7ab9e5c2ff02a4972409daf2128.jpg'/>
            <div className='profile-screen-details'>
              <h2>{user.email}</h2>
              <div className='profile-plans'>
                <h3>Plans (Current Plan: {})</h3> 
                <h4>Renewal Date: (date here) </h4>
                <button onClick={() => {auth.signOut()}} className='sign-out-btn'>Sign Out</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileScreen;