import React from 'react'
import './Login.css'
import {loginUrl} from './spotify'

const Login = () => {
    return (
        <div className= "login">
            <img 
            src = "https://i2.wp.com/batman-news.com/wp-content/uploads/2020/06/Spotify-Logo-Featured-01.jpg?w=1024&quality=80&strip=info&ssl=1"
            alt = ""
            />
            
           {/* Spotify Logo*/}
           {/** Login with spotify */} 

           <a href = {loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login