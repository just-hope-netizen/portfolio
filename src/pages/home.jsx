import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GitLinkIcon } from '../assets/svg';
import TechStack from '../components/tech-stack';
import Contact from './contact';

function Home() {
  const [more, setMore] = useState();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(['projects']);

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
          web-based applications with a focus on simplicity & usability.{' '}
          <span className='fw-bold' onClick={() => setMore(true)}>
            {more ? '' : 'read more...'}
          </span>
        </p>

        {more && (
          <p className='intro'>
            I'm passionate about design and functionality and how the two can be
            use to create good user experience. I mostly work with Javascript,
            and any new technologies as specified by my employers and clients. I
            enjoy supporting Small/Medium Business with technology.
          </p>
        )}

        <header className='row text-center mt-4'>
          <p className='page-header__desc h4'>Some projects I've worked on</p>
        </header>
        <div className='d-flex flex-wrap justify-content-center pb-4'>
          {data?.slice(2, 4).map((i) => (
            <Card style={{ width: '18rem', margin: '1rem' }} key={i.id}>
              <Card.Img variant='top' src={i.img} />
              <Card.Body>
                <Card.Title>{i.title}</Card.Title>
                <Card.Text>{i.intro}</Card.Text>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={i.site}
                  className='visit__btn btn'
                >
                  Open project
                </a>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className='d-flex justify-content-center mb-4'>
          <Link to={'/projects'} className='btn visit__btn '>
            View all projects
          </Link>
        </div>
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
