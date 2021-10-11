import React from 'react';
import Typewriter from 'typewriter-effect';
import integrations from '../../images/icons/integrations.png';
import {
  introBox,
  introText,
  introHeading,
  introContainerOne,
  introContainerTwo,
}
  from './About.module.css';
const About = () => {
  return (
    <div className={introBox}>
      <div className={introContainerOne}>
        <p className={introHeading}>
          Integrations
        </p>
        <p className={introText}>
          <Typewriter
            options={{
              strings: ['Moderation', 'GitHub', 'StackOverflow', 'Bing Search', 'Event Reminders'],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
      <img src={integrations} alt="Integrations" />
      <div className={introContainerTwo}>
      </div>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  )
}

export default About;
