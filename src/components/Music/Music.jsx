import React from 'react';
import Adele from "./../../assets/Adel_-_Roling_In_The_Deep.mp3"
import s from "./Music.module.css";



class Music extends React.Component {


    render() {

        return(
            <audio controls className={s.audioPlayer}>
               <source src={Adele}/>
            </audio>



)
}
}

export default Music;