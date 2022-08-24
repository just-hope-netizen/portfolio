import { useState } from 'react';
import bootstrapIcon from '../assets/image/bootstrap.png';
import nodejsIcon from '../assets/image/nodejs.png';
import {
    CssIcon,
    ExpressIcon,
    FirebaseIcon,
    GitIcon,
    HtmlIcon, JavascriptIcon,
    MongodbIcon,
    ReactIcon, VscodeIcon
} from '../assets/svg';

    function TechStack() {
    const [stackName, setStackName] = useState('react');

    return (  <div className=' px-3 pb-5 mt-4 container'>
      <div className='row'>
        <h5>TECH STACK:</h5>
        <div className='main-circle  col-12'>
          <div className='degree-wrapper'>
            <div className='degree first'>
              <ReactIcon
                className={stackName === 'react' ? 'pulse' : null}
                onClick={() => {
                  setStackName('react');
                }}
              />
            </div>
            <div className='degree second'>
              <JavascriptIcon
                className={stackName === 'javascript' ? 'pulse' : null}
                onClick={() => {
                  setStackName('javascript');
                }}
              />
            </div>

            <div className='degree third'>
              <HtmlIcon
                className={stackName === 'html' ? 'pulse' : null}
                onClick={() => {
                  setStackName('html');
                }}
              />
            </div>
            <div className='degree fourth'>
              <CssIcon
                className={stackName === 'css' ? 'pulse' : null}
                onClick={() => {
                  setStackName('css');
                }}
              />
            </div>
            <div className='degree fifth'>
              <FirebaseIcon
                className={stackName === 'firebase' ? 'pulse' : null}
                onClick={() => {
                  setStackName('firebase');
                }}
              />
            </div>
            <div className='degree sixth'>
              <img
                className={stackName === 'nodejs' ? 'pulse' : null}
                src={nodejsIcon}
                alt='nodejs icon'
                onClick={() => {
                  setStackName('nodejs');
                }}
              />
            </div>
            <div className='degree seventh'>
              <img
                className={stackName === 'bootstrap' ? 'pulse' : null}
                src={bootstrapIcon}
                alt='bootstrap icon'
                onClick={() => {
                  setStackName('bootstrap');
                }}
              />
            </div>
            <div className='degree eighth'>
              <ExpressIcon
                className={stackName === 'expressjs' ? 'pulse' : null}
                onClick={() => {
                  setStackName('expressjs');
                }}
              />
            </div>
            <div className='degree ninth'>
              <MongodbIcon
                className={stackName === 'mongo db' ? 'pulse' : null}
                onClick={() => {
                  setStackName('mongo db');
                }}
              />
            </div>
          </div>
          <div
            className={`center-label ${
              (stackName === 'react' && 'react-style') ||
              (stackName === 'javascript' && 'javascript-style') ||
              (stackName === 'firebase' && 'firebase-style') ||
              (stackName === 'bootstrap' && 'bootstrap-style') ||
              (stackName === 'mongo db' && 'mongo-style') ||
              (stackName === 'expressjs' && 'express-style') ||
              (stackName === 'html' && 'html-style') ||
              (stackName === 'css' && 'css-style') ||
              (stackName === 'nodejs' && 'node-style')
            }`}
          >
            <span className='stack-name'>{stackName}</span>
          </div>
        </div>
        <section className='mt-5'>
          <h5 className='mb-3 '>
            VERSION CONTROL: <GitIcon />
          </h5>
          <h5>
            CODE EDITOR: <VscodeIcon />
          </h5>
        </section> </div> </div> );
}

export default TechStack;