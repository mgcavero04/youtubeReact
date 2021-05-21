import './VideoItem.css';
import React from 'react';


const Videoitem = ({video, onVideoSelect}) => {
    return (//call back(from child to parent)
    <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img alt={video.snippet.title} 
            className="ui image" 
            src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        
    </div>)

};

export default Videoitem;
