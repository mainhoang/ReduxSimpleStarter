import React from 'react';

const VideoListItem = ({video, onSelect}) => {
    const imgURL = video.snippet.thumbnails.default.url;

    return (
        <li className='list-group-item' onClick={() => onSelect(video)}>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imgURL} />
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;