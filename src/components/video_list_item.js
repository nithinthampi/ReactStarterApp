import React from 'react';

const VideoListItem = ({video,videoSelected}) => {
    console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li 
        onClick={(event) => videoSelected(video)}
        className="list-group-item">
            <div className=""video-list media>
                <div className="media-left">
                        <image className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}    
                    </div>
                </div>
            </div>
        </li>
        );
};

export default VideoListItem;