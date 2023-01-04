import { Link } from 'react-router-dom';
import { GitLinkIcon } from '../assets/svg';
import TechStack from '../components/tech-stack';
import Contact from './contact';

function Home() {
  return (
    <main className='main container px-md-5'>
      <div className='row mx-md-5 pb-5'>
        <TechStack />
        <span className='divider my-5 px-sm-1'></span>
        <small>Hi, my name is</small>
        <h1>Hope Peter,</h1>
        <p className='intro'>
          I'm a Software Engineer who builds high-functional, user friendly,
          accessible, flexible, mobile responsive & custom website for my
          employer. I specialise in interface development and functionality in
          web-based applications with a focus on simplicity & usability.
        </p>
        <p className='intro'>
          I'm passionate about design and functionality and how the two can be
          use to create good user experience. I mostly work with Javascript, and
          any new technologies as specified by my employers and clients. I enjoy
          supporting Small/Medium Business with technology.
        </p>
        <p className='intro'>
          Outside of work my hobbies include playing video games, watching
          sci-fi shows & movies and experimenting with the latest tech.
        </p>

        <div className='home-links-list my-3'>
          <ul className='home-links d-flex justify-content-between align-items-center ps-0'>
            <li>
              <a
                className='github-link d-flex justify-content-center align-items-center'
                href='https://github.com/just-hope-netizen'
                title='Github'
                target='_blank'
                rel='noreferrer'
              >
                <GitLinkIcon className='git-link-icon' />
              </a>
            </li>
            <li>
              <Link to={'/contact'} className='mail-link'>
                Email me
              </Link>
            </li>
          </ul>
        </div>

        <span className='divider my-5 px-sm-1'></span>
      </div>

      <Contact className={true} />
      <div
        id='Announcer'
        role='status'
        aria-live='assertive'
        aria-atomic='true'
        aria-hidden='true'
        className='visuallyhidden'
      >
        You just navigated to: Home
      </div>
    </main>
  );
}

export default Home;
