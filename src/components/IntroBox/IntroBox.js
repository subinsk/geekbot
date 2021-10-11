import React from 'react'
import Typewriter from 'typewriter-effect';
import {
    introboxContainer,
    introText1,
    introText2,
    geekbotImage
} from './IntroBox.module.css'

import geekbot from '../../images/brand/botimage.jpg';


const IntroBox = () => {
    return (
        <div className={introboxContainer}>
            <p className={introText1}>
                GEEKBOT
            </p>
            <p className={introText2}>
            <img className={geekbotImage} src={geekbot} alt='GeekBot' />
                    <Typewriter
                        options={{
                            strings: ['Hello', 'World'],
                            autoStart: true,
                            loop: true,
                            cursor: '_'
                        }}
                    />
            </p>

        </div>
    )
}

export default IntroBox;
