import { useState } from 'react';
import bootstrapIcon from '../assets/image/bootstrap.png';
import nodejsIcon from '../assets/image/nodejs.png';
import {
  CssIcon,
  ExpressIcon,
  FirebaseIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  MongodbIcon,
  ReactIcon,
  VscodeIcon,
} from '../assets/svg';

function Tools() {
  const [stackName, setStackName] = useState('react');

  return (
    <main className='main px-3'>
      <h5>TECH STACK:</h5>
      <div className='main-circle'>
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
        <div className='center-label'>
          <span className='stack-name'>{stackName}</span>
        </div>
      </div>
      <section className='mt-5'>
        <h6>
          VERSION CONTROL: <GitIcon />
        </h6>
        <h6>
          CODE EDITOR: <VscodeIcon />
        </h6>
      </section>
      <span className='divider my-5 px-sm-1'></span>

      <section>
        <div>
          <article className='s-card'>
            <div className='icon-wrap'>
              <img src={''} alt='design' />
            </div>
            <h3>Web Design</h3>
            <p>
              I'll help you with everything involved with visual
              aesthetics(color scheme, layout, information flow etc.) &amp;
              usability of your website.
            </p>
          </article>
          <article className='s-card'>
            <div className='icon-wrap'>
              <img src={''} alt='design' />
            </div>
            <h3>Web Design</h3>
            <p>
              I'll help you with everything involved with visual
              aesthetics(color scheme, layout, information flow etc.) &amp;
              usability of your website.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Tools;
