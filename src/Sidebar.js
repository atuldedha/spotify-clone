import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import {useDataLayerValue} from './react-context-api/DataLayer'

const Sidebar = () => {

    const [ {playlists}, dispatch] = useDataLayerValue();

    return (
        <div className = "sidebar">
            <img className = "sidebar_logo"
            src = "https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol-768x234.jpg" 
            alt = "Spotify Logo"
            />

            <SidebarOption title = "Home" Icon = {HomeIcon}/>
            <SidebarOption title = "Search" Icon = {SearchIcon}/>
            <SidebarOption title = "Your Library" Icon = {LibraryMusicIcon}/>
            
            <br/>
            <strong className = "sidebar_title">PLAYLISTS</strong>
            
            <hr />

            {playlists ?.items?.map((playlist) => (
                <SidebarOption title = {playlist.name} />
            ))}

        </div>
    )
}

export default Sidebar
