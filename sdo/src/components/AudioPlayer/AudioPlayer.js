import * as React from "react";
import ReactAudioPlayer from 'react-audio-player';

const Player = () => {
    return <ReactAudioPlayer
        src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3"
        // autoPlay
        controls
    />
}

export { Player }