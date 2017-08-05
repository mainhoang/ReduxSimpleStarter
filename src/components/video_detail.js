import React from 'react';

const VideoDetail = ({selected}) => {

    if(!selected){
        return <div>Loading...</div>;
    }

    const videoId = selected.id.videoId;
    const url = `http://www.youtube.com/embed/${videoId}`;
    // SAME AS: const url = 'http://www.youtube.com/embed/' + videoId;

    return (

        <div className='video-detail col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src={url}></iframe>
            </div>
            <div className='details'>
                <div>{selected.snippet.title}</div>
                <div>{selected.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetail;