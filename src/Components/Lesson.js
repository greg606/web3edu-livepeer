import React from 'react'
import ReactPlayer from 'react-player'

function Lesson() {
    return <>
        <p>Live stream:</p>
        <ReactPlayer className='react-player'
                     url='https://cdn.livepeer.com/hls/12708c63nmcbukaq/index.m3u8'
                     playing
                     width='100%'
                     controls
                     config={{
                         file: {
                             forceHLS: true,
                         }
                     }}
        />
        {/*<ReactPlayer url='https://cdn.livepeer.com/hls/12708c63nmcbukaq/index.m3u8' />*/}
        </>;
}

export default Lesson;