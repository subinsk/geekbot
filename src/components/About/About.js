import React from 'react';
import * as AboutStyles from './About.module.css';

const About = ()=>{
  return(
    <div>
    <div className={AboutStyles.introBox}>
      <h1>GeekBot</h1>
      <img href='https://res.cloudinary.com/dngbmzf6x/image/upload/v1633773394/GeekBot/geekbot_fyam7o.jpg' alt='GeekBot'/>
    </div>
    </div>
  )
}

export default About;
