import React from 'react';
import {
footerContainer,
quicklinks,
footerAbout,
footerBtn
} from './Footer.module.css'

const Footer = () => {
  return (
    <div>
      <div className={footerContainer}>
        <div className={quicklinks}>
          <p>Quick Links
            <a className={footerBtn} href='https://discord.com/oauth2/authorize?client_id=857159249363992586&scope=bot'>Invite me</a>
          </p>
        </div>
        <div className={footerAbout}>
          <p>
            D & D by&nbsp;
            <a href="https://www.linkedin.com/in/subin-sk-9b767219a/">
              Subin S K
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
