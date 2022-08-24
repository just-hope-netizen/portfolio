import ceevoSnapShot from '../assets/image/ceevo-screenshot.png';
import donSnapShot from '../assets/image/don-remolo-screenshot.png';
import portfolioSnapShot from '../assets/image/personal-website-shot.png';
import checkSnapShot from '../assets/image/Check-This-shot.png';
import Services from '../components/services';
import SkillsExperience from '../components/skills-experience';
import { useState } from 'react';
import Tool from '../components/tool';
import ProjectAbout from '../components/project-about';

function Projects() {
  const [className, setClassName] = useState();
  const [project, setProject] = useState();

  function setClass(className) {
    setClassName(className);
  }

  function removeClass() {
    setClassName();
  }
  function showProject(project) {
    setProject(project);
  }

  function hideProject() {
    setProject()
  }

  return (
    <>
      <main className='projects-container main container-fluid mb-5 pb-5'>
        <header className='row text-center'>
          <p className='page-header__desc'>
            Selected projects I've worked on in the past.
          </p>
        </header>

        <section className=' container-lg   pb-4'>
          <ul
            aria-label='projects'
            className='projects d-flex  flex-wrap justify-content-between align-items-center p-3 my-3'
          >
            <li
              className='project m-1 mb-4 '
              onClick={() => {
                showProject('don-remolo');
              }}
              onMouseOver={() => {
                setClass('don-remolo');
              }}
              onMouseOut={() => {
                removeClass();
              }}
            >
              <img
                src={donSnapShot}
                alt='don-remolo website snapshot'
                className='project__logo-img'
              />
              <div
                className={
                  className === 'don-remolo'
                    ? 'project__info active'
                    : 'project__info'
                }
              >
                <h4 className='fw-bold'>Don-Remolo</h4>
                <p>An e-commerce application for buying pizza.</p>
                <div className='d-flex flex-wrap justify-content-center mb-3'>
                  <Tool tool={'Css'} />
                  <Tool tool={'React'} />
                  <Tool tool={'Redux'} />
                  <Tool tool={'Expressjs'} />
                  <Tool tool={'MongoDb'} />
                  <Tool tool={'Jwt'} />
                  <Tool tool={'JavaScript'} />
                </div>
              </div>
            </li>
            <li
              className='project  mb-4 '
              onClick={() => {
                showProject('check-this');
              }}
              onMouseOver={() => {
                setClass('check-this');
              }}
              onMouseOut={() => {
                removeClass();
              }}
            >
              <img
                src={checkSnapShot}
                alt='check-this website snapshot'
                className='project__logo-img'
              />
              <div
                className={
                  className === 'check-this'
                    ? 'project__info active'
                    : 'project__info'
                }
              >
                <h4 className='fw-bold'>Check-This</h4>
                <p>Scan url for malicious content.</p>
                <div className='d-flex flex-wrap justify-content-center mb-3'>
                  <Tool tool={'Css'} />
                  <Tool tool={'React'} />
                  <Tool tool={'TypeScript'} />
                </div>
              </div>
            </li>
            <li
              className='project m-1 mb-4 '
              onClick={() => {
                showProject('ceevo');
              }}
              onMouseOver={() => {
                setClass('ceevo');
              }}
              onMouseOut={() => {
                removeClass();
              }}
            >
              <img
                src={ceevoSnapShot}
                alt='ceevo website snapshot'
                className='project__logo-img'
              />

              <div
                className={
                  className === 'ceevo'
                    ? 'project__info active'
                    : 'project__info'
                }
              >
                <h4 className='fw-bold'>Ceevo</h4>
                <p>Verify and authenticate users.</p>
                <div className='d-flex flex-wrap justify-content-center mb-3'>
                  <Tool tool={'Css'} />
                  <Tool tool={'React'} />
                  <Tool tool={'Expressjs'} />
                  <Tool tool={'JavaScript'} />
                  <Tool tool={'MongoDb'} />
                </div>
              </div>
            </li>

            <li
              className='project  mb-4 '
              onClick={() => {
                showProject('portfolio');
              }}
              onMouseOver={() => {
                setClass('portfolio');
              }}
              onMouseOut={() => {
                removeClass();
              }}
            >
              <img
                src={portfolioSnapShot}
                alt='portfolio website snapshot'
                className='project__logo-img'
              />
              <div
                className={
                  className === 'portfolio'
                    ? 'project__info active'
                    : 'project__info'
                }
              >
                <h4 className='fw-bold'>Portfolio</h4>
                <p>Personal website</p>
                <div className='d-flex flex-wrap justify-content-center mb-3'>
                  <Tool tool={'Css'} />
                  <Tool tool={'React'} />
                  <Tool tool={'Bootstrap'} />
                  <Tool tool={'JavaScript'} />
                </div>
              </div>
            </li>
          </ul>
        </section>
        <ProjectAbout
          className={
            project === 'don-remolo' ? 'project__about slide' : 'project__about'
          }
          cancel={hideProject}
          src={donSnapShot}
          alt='don-remolo website snapshot'
          href='https://don-remolo.netlify.app'
          project_name='Don-Remolo'
          project_intro='An e-commerce application for buying pizza.'
        >
          {' '}
          <p className='text-justify'>
            An e-commerce web app that provides the best and fastest pizza
            ordering experience for customers.
          </p>
          <span className='fw-bold'>Contact me for admin access</span>
        </ProjectAbout>
        <ProjectAbout
          className={
            project === 'ceevo' ? 'project__about slide' : 'project__about'
          }
          cancel={hideProject}
          src={ceevoSnapShot}
          alt='ceevo website snapshot.'
          href='https://ceevo.netlify.app'
          project_name='Ceevo'
          project_intro='Verify and authenticate users.'
        >
          {' '}
          <p className='text-justify'>
            Ceevo is a registration and login system with features like email
            verification for creating an account, email redirect link to change
            password etc, test it out to see a suprising feature I implemented
            at the end.
          </p>
        </ProjectAbout>
        <ProjectAbout
          className={
            project === 'check-this' ? 'project__about slide' : 'project__about'
          }
          cancel={hideProject}
          src={checkSnapShot}
          alt='check-this website snapshot'
          href='https://check-this.vercel.app'
          project_name='Check-This'
          project_intro='Scan url for malicious content.'
        >
          {' '}
          <p className='text-justify'>
            A platform that flags malicious url.
          </p>{' '}
        </ProjectAbout>
        <ProjectAbout
          className={
            project === 'portfolio' ? 'project__about slide' : 'project__about'
          }
          cancel={hideProject}
          src={portfolioSnapShot}
          alt='portfolio website snapshot'
          href='https://hope-peter.tech'
          project_name='Portfolio'
          project_intro='Personal website'
        >
          {' '}
          <p className='text-justify'>
            A well curated and nicely structured portfolio website that
            showcases some of my projects.
          </p>{' '}
        </ProjectAbout>
        <Services />

        <SkillsExperience />
        <div
          id='Announcer'
          role='status'
          aria-live='assertive'
          aria-atomic='true'
          aria-hidden='true'
          className='visuallyhidden'
        >
          You just navigated to: Projects
        </div>
      </main>
    </>
  );
}

export default Projects;
