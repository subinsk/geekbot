import React from 'react'
import 
{
    introboxContainer,
    introText1,
    introText2,
    geekbotImage
} from './IntroBox.module.css'

import geekbot from '../../images/botimage.jpg';

const IntroBox=()=> {
    return (
        <div className={introboxContainer}>
            <p className={introText1}>
               Hola Everyone ! 
            </p>
            <p className={introText2}>
                GeekBot Here 
            </p>
            <img className={geekbotImage} src={geekbot} alt='GeekBot'/>
        </div>
    )
}

export default IntroBox;
