import React from 'react';
import Logo from '../../../assets/img/app-logo.svg';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faQq, faWeixin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-header'>
          <div className='footer-header-left'>
            <img src={Logo} alt='zhibanglogo' />
          </div>

          <div className='footer-header-right'>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faQq} />
            <FontAwesomeIcon icon={faWeixin} />
          </div>
        </div>
      </div>

      {/** Border */}
      <hr />

      <div className='container'>
        <div className='footer-bottom'>
          <div className='footer-bottom-left'>
            <li>
              <a href=''>Terms of use</a>
            </li>
            <li>
              <a href=''>Privacy Policy</a>
            </li>
            <li>
              <a href=''>Cookie policy</a>
            </li>
          </div>

          <div className='footer-bottom-right'>
            <p>Copyright @ 2021 Zhibang, All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
