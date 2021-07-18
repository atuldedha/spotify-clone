import React from 'react'
import './Player.css'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

const Player = ({spotify}) => {
    return (
        <div className = "player">
            {/* {Tasks to do - >} */}
            <div className = "player_body">
                <Sidebar />
                <Body spotify = {spotify}/>

            {/* {Side bar}
            {Body} */}
            </div>

            <Footer />
            
            {/* {footer} */}

        </div>
    )
}

export default Player
