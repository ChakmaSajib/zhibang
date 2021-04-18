import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import ButtonSecondaryIcon from './ButtonSecondaryIcon';
import ButtonSecondaryIconBlack from './ButtonSecondaryIconBlack';

export default function ButtonWithIcon({ icon, name }) {
  return (
    <div>
      <ButtonSecondaryIcon text='Request CV' icon={faFileAlt} />
      <ButtonSecondaryIconBlack text='Request Github' icon={faGithub} />
    </div>
  );
}
