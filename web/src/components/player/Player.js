import React from 'react'
import {PlayerButton} from '../playerButton'
import './player.scss'



export default () => {

    return(
        <div className="player">
            <PlayerButton icon="step-backward" />
            <PlayerButton icon="play"/>
            <PlayerButton icon="step-forward"/>
        </div>
    )
    
};
