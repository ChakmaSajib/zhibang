import React, { useState, useEffect } from 'react';
import ChatingSearchBox from './chating/ChatingSearchBox';
import Header from './shared/Header';
import { Link } from 'react-router-dom';
import HRProfile from '../assets/img/hr-profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSkype, faQq } from '@fortawesome/free-brands-svg-icons';
import SocketIOClient from 'socket.io-client';

console.log(SocketIOClient);
export default function Chating() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [response, setResponse] = useState('');
  let number = 2;
  useEffect(() => {
    const socket = SocketIOClient('ws://localhost:8080/', {
      path: 'connectWebSocket/',
      query: `userId=${number}`
    });
    socket.connect(() => {
      console.log('connected');
    });
    socket.on('message', (data) => {
      console.log(data);
    });

    console.log(socket);
  }, []);
  return (
    <React.Fragment>
      <Header />
      <div className='container'>
        <div className='chating'>
          <div className='chating__left'>
            {/* <ChatingSearchBox /> */}
            <div className='chats__people'>
              <ChatPeople image={HRProfile} name='Mono C' lastmessage='Hello' />
              <ChatPeople image={HRProfile} name='Mono C' lastmessage='Hello' />
              <ChatPeople
                image={HRProfile}
                name='Mono C'
                lastmessage='Hello'
                unread='true'
              />
              <ChatPeople
                image={HRProfile}
                name='Mono C'
                lastmessage='Hello'
                active='true'
              />
            </div>
          </div>
          <div className='chating__middle'>
            <div className='chating_mid_top'>
              <h2>
                Chat with <span>Zihui Park</span>
              </h2>
            </div>

            <div className='chat__message_container'>
              <div className='message__receive chat__message'>
                <img src={HRProfile} />
                <p>
                  We are looking for an energetic front-end engineer.We are
                  looking for an energetic front-end engineer.We are looking for
                  an energetic front-end engineer.
                </p>
              </div>
              <div className='message__sent chat__message'>
                <p>That's great.</p>
                <img src={HRProfile} />
              </div>

              <div className='message_input'>
                <form className='chat_form'>
                  <input type='text' placeholder='Write something...' />
                  <input type='submit' value='' />
                </form>
              </div>
            </div>
          </div>
          <div className='chating__right'>
            <div className='chating__right__profile'>
              <img src={HRProfile} />
              <h2>Zihui Park</h2>
              <p>Head of HR, NFLabs</p>
              <div className='social__icons'>
                <FontAwesomeIcon icon={faQq} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faSkype} />
              </div>
            </div>
            <div className='chating__right__attachment'>
              <h4>Attachments</h4>
              <p>No attachment available.</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function ChatPeople({ image, name, lastmessage, unread, active }) {
  return (
    <>
      <Link
        to='/chat/people'
        className={`chat__people ${active ? 'active' : ''}`}
      >
        <img src={image} />
        <div className={`text ${unread ? 'unread' : ''}`}>
          <h2>{name}</h2>
          <p>{lastmessage}</p>
        </div>
      </Link>
    </>
  );
}
