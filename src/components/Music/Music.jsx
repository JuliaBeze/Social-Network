import React from 'react';

import s from "./Music.module.css";



class Music extends React.Component {


    render() {

        return(
            <audio controls className={s.audioPlayer}></audio>



)
}
}

export default Music;