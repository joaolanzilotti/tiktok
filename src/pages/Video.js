import React, { useRef, useState } from 'react'
import "./video.css";

function Video() {

    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);

    function handdleStart(){

        if(play){
            videoRef.current.pause()
            setPlay(false)
        }else{
            videoRef.current.play()
            setPlay(true)
        }
        
       
    }

    return (
        <div className='video'>
            
            <video ref={videoRef} 
            onClick={handdleStart} 
            loop 
            src='https://media.istockphoto.com/id/1385148464/pt/v%C3%ADdeo/cute-ginger-cat-with-glasses-sitting-in-a-box-on-a-yellow-background-in-neon-light.mp4?s=mp4-640x640-is&k=20&c=UG8HHhPcPU_UED_yAh7EU6fAYj9tkLjPs1DajcV--vQ=' className="video__player">
                
            </video>
        </div>
    )
}

export default Video