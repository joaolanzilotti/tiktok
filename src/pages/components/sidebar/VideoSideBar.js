import React, { useRef, useState } from 'react'
import "./videoSideBar.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
function VideoSideBar() {

    const [liked, setLiked] = useState(false);
    function handdleLike(){
        setLiked(!liked)
    }
    return (
        <div className="videoSideBar" onClick={handdleLike}>
            <div className="videoSideBar__options">
                { liked ? <FavoriteIcon fontSize="large" /> :  <FavoriteBorderIcon fontSize="large" /> }
               <p> { liked ? 300 + 1 : 300 } </p>
            </div>
            <div className="videoSideBar__options">
               <ChatIcon fontSize="large" />
               <p>200</p>
            </div>
            <div className="videoSideBar__options">
               <ShareIcon fontSize="large" />
               <p>100</p>
            </div>
        </div>
    );
}

export default VideoSideBar