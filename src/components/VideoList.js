import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
    const rendereList = videos.map(video => {
        return <VideoItem video={video} />;
    });
    return <div className="ui relaxed divided list">{rendereList}</div>;
};

export default VideoList;