import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';
// import { Link } from 'reac';

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a href='https://github.com/konda-anil' target='_blank'>
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href='https://www.linkedin.com/in/anil-konda-09b21417a/'
        target='_blank'
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href='https://www.instagram.com/anilchathurvedi/' target='_blank'>
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
