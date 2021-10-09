import React from 'react';
import {
  footerContainer,
  quicklinks,
  footerAbout,
  footerBtn,
  copyright,
  footerContent1,
  footerContent2
} from './Footer.module.css'

const Footer = () => {
  const date = new Date();
  return (
    <div className={footerContainer}>
      <div className={footerContent1}>
        <div className={quicklinks}>
          <p>Quick Links:
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

      <hr />

      <div className={footerContent2}>
        <div className={copyright}>
          Copyright &#169; {date.getFullYear()} GeekBot Inc. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer;
