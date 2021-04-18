import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import InputType from '../components/InputType';
import Add from '../components/Add';
import { faPlusCircle, faSave } from '@fortawesome/free-solid-svg-icons';
import { faQq, faWeixin, faSkype } from '@fortawesome/free-brands-svg-icons';
import ButtonSecondaryIcon from './Buttons/ButtonSecondaryIcon';

export default function UpdateProfileContainer() {
  return (
    <React.Fragment>
      <div className='container'>
        <form className='update-profile__form'>
          <div className='update-profile__container'>
            <div className='update-profile__left-side'>
              <div className='update_profile__info-section'>
                <h3>Personal Information</h3>
                <div className='content'>
                  <InputType
                    type='text'
                    placeholder='Full Name'
                    id='fullname'
                  />
                  <InputType
                    type='text'
                    placeholder='Phone number'
                    id='fullname'
                  />
                  <InputType type='text' placeholder='Email' id='fullname' />
                  <InputType
                    type='text'
                    placeholder='Set Time zone'
                    id='fullname'
                  />
                </div>
              </div>
              <div className='update_profile__info-section'>
                <h3>Connect</h3>
                <div className='content'>
                  <label>
                    <FontAwesomeIcon icon={faQq} />
                    <InputType type='text' placeholder='Add QQ' id='skype' />
                  </label>

                  <label>
                    <FontAwesomeIcon icon={faSkype} />
                    <InputType
                      type='text'
                      placeholder='Add Skype'
                      id='fullname'
                    />
                  </label>
                  <label>
                    <FontAwesomeIcon icon={faWeixin} />
                    <InputType
                      type='text'
                      placeholder='Add Wechat'
                      id='fullname'
                    />
                  </label>
                </div>
              </div>

              <div className='update_profile__info-section'>
                <h3>Skills</h3>
                <div className='content'>
                  <Add text='Add Skills' icon={faPlusCircle} />
                  <AddSkillsType />
                </div>
              </div>
            </div>

            <div className='update-profile__right-side'>
              <div className='update_profile__info-section'>
                <h3>Work Experience</h3>
                <div className='content'>
                  <InputType type='text' placeholder='Duration' id='Duration' />
                  <InputType
                    type='text'
                    placeholder='Department'
                    id='Duration'
                  />
                  <InputType type='text' placeholder='Company' id='Duration' />
                  <InputType type='text' placeholder='Location' id='Duration' />
                  <Add icon={faPlusCircle} text='Add Work' />
                </div>
              </div>
              <div className='update_profile__info-section'>
                <h3>Academic Background</h3>
                <div className='content'>
                  <label>
                    <span>
                      Degree
                      <select name='degree' id='degree'>
                        <option value='Hons'>Hons</option>
                        <option value='Masters'>Masters</option>
                        <option value='Engineering'>Engineering</option>
                      </select>
                    </span>
                    <span>
                      Passing year
                      <InputType
                        type='text'
                        placeholder='Passing Year'
                        id='Duration'
                      />
                    </span>
                  </label>

                  <InputType type='text' placeholder='Duration' id='Duration' />
                  <InputType
                    type='text'
                    placeholder='Department'
                    id='Duration'
                  />
                  <InputType
                    type='text'
                    placeholder='Institution'
                    id='Duration'
                  />
                  <InputType type='text' placeholder='Location' id='Duration' />

                  <Add icon={faPlusCircle} text='Add Degree' />
                </div>
              </div>
            </div>
            <div className='update-profile__form-button'>
              <ButtonSecondaryIcon icon={faSave} text='Save' />
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

function AddSkillsType() {
  return (
    <div className='update-profile__add-skills'>
      <label>
        Select Type
        <select name='addSkill' id='skill'>
          <option value='Software'>Software</option>
          <option value='Programming languages'>Programming Language</option>
          <option value='Monoc '>Mono c</option>
        </select>
      </label>
      <InputType type='text' placeholder='Skill Name' />
    </div>
  );
}
