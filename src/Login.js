import React, { useState } from 'react'
import './Login.css'
import {auth} from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

function Login() {
    const [email,setEmail] = useState('')
    const [name, setName] = useState('')
    const[password, setPassword] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((userAuth) => {
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoUrl:userAuth.user.photoUrl,

            }));

        }).catch(error => alert(error))
    };
    
    const register = () => {
        if(!name){
            return alert('please enter valid name');
        }
        auth.createUserWithEmailAndPassword(email,password)
            .then(
                (userAuth) => {
                    userAuth.user.updateProfile({
                        displayName:name,
                        photoUrl:profilePic
                    
                    })
                    .then(()=>{
                        dispatch(login({
                            email:userAuth.user.email,
                            uid:userAuth.user.uid,
                            displayName:name,
                            photoUrl:profilePic,

                        }));
                    });
                }
            ).catch(( error) =>alert(error));
    };

   
    return (
        <div className = 'login'>
            <img
                src = 'https://mybcom.sauder.ubc.ca/sites/mybcom.sauder.ubc.ca/files/styles/panopoly_image_original/public/media/linkedin.png?itok=8kqWB2ad&c=1999f0c716dfafcc9c8ebc0f86db4438'
                alt = ''
            />
            <form>
                <input value = {name} onChange = {e => setName(e.target.value)} placeholder = 'Full Name(required if regestering)' type = 'text'/>
                <input value = {profilePic} onChange = {e => setProfilePic(e.target.value)} placeholder = 'profile pic URl(optional)' type = 'text'/>
                <input value = {email} onChange={e => setEmail(e.target.value)} placeholder = 'email' type = 'email'/>
                <input value = {password} onChange = {e => setPassword(e.target.value)} placeholder = 'password' type = 'passwaord'/>
                <button type = 'submit' onClick = {loginToApp}>Sign In</button>
            </form>
            <p>Not a member {" "}<span className = 'login__register' onClick = {register}>Register</span></p>
            
        </div>
    )
}

export default Login
