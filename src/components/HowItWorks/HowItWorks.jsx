import React from 'react';
import HowItWorksIcon from '../../assets/img/howitworks.svg';
import './howItWorks.scss';

export default function HowItWorks() {
  return (
    <div className='howitworks'>
      <div className='howitworks_container'>
        <h2>How it works</h2>
        <IconsWithContent icon={HowItWorksIcon} content='Find a HR' />
        <IconsWithContent icon={HowItWorksIcon} content='Send your CV' />
        <IconsWithContent
          icon={HowItWorksIcon}
          content='Take mock interviews'
        />
        <IconsWithContent icon={HowItWorksIcon} content='Develop skills' />
        <IconsWithContent icon={HowItWorksIcon} content='Get a job' />
      </div>
    </div>
  );
}

function IconsWithContent({ icon, content }) {
  return (
    <div className='howitworks__content'>
      <img src={icon} />
      <span>{content}</span>
    </div>
  );
}
