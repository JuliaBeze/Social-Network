import React from 'react';
import Adele from "./../../assets/Adel_-_Roling_In_The_Deep.mp3"
import AudioPlayer from "react-modular-audio-player";
import adele from "../../assets/adele.jpg"


class Music extends React.Component {


    render() {


       const rearrangedPlayer = [
            {
                // className: "adele",
                style: { cursor: "pointer" },
                innerComponents: [{type: "play"}]}
        ];

        return(
                <AudioPlayer audioFiles={[
                        {src: {Adele},
                            title: "Roling In The Deep",
                            artist: "Adele"}
                    ]}
                    rearrange={rearrangedPlayer}
                    playerWidth="10rem"
                    iconSize="10rem"
                    playIcon={adele}
                    playHoverIcon={adele}
                    pauseIcon={adele}
                    pauseHoverIcon={adele}
                />
            )



    }



}


//inside Component render()

export default Music;