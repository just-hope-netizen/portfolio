import { useState } from 'react';
import bootstrapIcon from '../assets/image/bootstrap.png';
import nodejsIcon from '../assets/image/nodejs.png';
import {
  CodeIcon,
  CssIcon,
  ExpressIcon,
  FirebaseIcon,
  GitIcon,
  HtmlIcon,
  IntergrationIcon,
  JavascriptIcon,
  MongodbIcon,
  ReactIcon,
  SupportIcon,
  VscodeIcon
} from '../assets/svg';

function Tools() {
  const [stackName, setStackName] = useState('react');

  return (
    <main className='main px-3 pb-5  container'>
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
        </section>
        <span className='divider my-5 px-sm-1'></span>

        <section>
          <h5 className='text-center my-5'>SERVICES </h5>
          <div className='row  my-3'>
            <article className='col-lg-4 my-2'>
              <div className='s-card'>
                <div className='s-icon-wrap'>
                  <CodeIcon />
                </div>
                <h5 className='s-heading'>Web Development</h5>
                <p>
                  I build simple, flexible, mobile responsive &amp; custom
                  website for individuals &amp; small/medium sized company. With
                  usability, accessibility &amp; functionality in mind.
                </p>
              </div>
            </article>
            <article className='col-lg-4 my-2'>
              <div className='s-card'>
                <div className='s-icon-wrap'>
                  <IntergrationIcon />
                </div>
                <h5 className='s-heading'>Integration</h5>
                <p>
                  I'll help you integrate 3rd party APIs into your web app. App
                  integration helps manage &amp; keep your data in sync,
                  automate task, enhance productivity &amp; drive more revenue.
                </p>
              </div>
            </article>
            <article className='col-lg-4 my-2'>
              <div className='s-card'>
                <div className='s-icon-wrap'>
                  <SupportIcon />
                </div>
                <h5 className='s-heading'>Continous Support</h5>
                <p>
                  Even after your project is completed, i provide continous
                  support wich may includes fixes &amp; update, development of
                  additional functionality &amp; features that will make your
                  product reach its full potentials.
                </p>
              </div>
            </article>
          </div>
        </section>
        <div
          id='Announcer'
          role='status'
          aria-live='assertive'
          aria-atomic='true'
          aria-hidden='true'
          className='visuallyhidden'
        >
          You just navigated to: Tools
        </div>
      </div>
    </main>
  );
}

export default Tools;
