import React from 'react';
import * as AboutStyles from './About.module.css';

const About = ()=>{
  return(
    <div>
    <div className={AboutStyles.introBox}>
      <h1>GeekBot</h1>
      <img href='../../images/botimage.jpg' alt='GeekBot'/>
    </div>
    </div>
  )
}

export default About;
