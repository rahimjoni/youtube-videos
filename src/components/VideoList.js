import React from 'react';
import VideosList from "./VideosList";

function VideoList({videos,onVideoSelect}){
    const renderList= videos.map((video)=>{
        return <VideosList key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    })
    return (
        <div className="ui relaxed divided list">{renderList}</div>
    );
}


export default VideoList;
