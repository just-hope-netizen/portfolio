import { Link } from 'react-router-dom';
import donLogo from '../assets/image/don-remolo.png';
import ceevoLogo from '../assets/image/ceevo.png';
import Contact from './contact';
import { GitLinkIcon } from '../assets/svg';
import TechStack from '../components/tech-stack';

function Home() {
  return (
    <main className='main container px-md-5'>
      <div className='row mx-md-5 pb-5'>
        <small>Hi, my name is</small>
        <h1>Hope Peter,</h1>
        <p className='intro'>
          I am a Software Engineer who I build high-functional, user friendly,
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
        <TechStack />
        <span className='divider my-5 px-sm-1'></span>

        <div className=' mt-4  '>
          <h4 className='h3  feature-projects-heading'>Featured projects</h4>
          <p className=''>
            A collection of some side projects that I have shipped recently.
          </p>
        </div>
        <ul className=' mb-5'>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://don-remolo.netlify.app'
              aria-label='don-remolo live demo.'
              className='feature-project d-flex flex-column flex-lg-row align-items-center  p-4 mb-2'
            >
              <figure className=' d-flex align-items-center me-4'>
                <span aria-hidden='true'>
                  <img
                    src={donLogo}
                    alt='don-remolo logo'
                    className='project__logo-img'
                  />
                </span>
                <figcaption className='visuallyhidden'>
                  Don-Remolo logo.
                </figcaption>
              </figure>
              <span className='text-justify'>
                Don-Remolo is a CRUD web app built using react and express for
                the frontend and backend respectively with paypal intergration
                for payment and mongoDB for database. Don-Remolo is a e-commerce
                web app with amazing features like auth, admin access which
                allows the admin to create product, edit product, delete
                product, see product ordered, cancel product and much more.{' '}
                <span className='fw-bold'>Contact me for admin access</span>
              </span>
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://ceevo.netlify.app'
              aria-label='ceevo live demo.'
              className='feature-project d-flex flex-column flex-lg-row align-items-center  p-4 mb-2'
            >
              <figure className=' d-flex align-items-center me-4'>
                <span aria-hidden='true'>
                  <img
                    src={ceevoLogo}
                    alt='ceevo logo'
                    className='project__logo-img'
                  />
                </span>
                <figcaption className='visuallyhidden'>Ceevo logo.</figcaption>
              </figure>
              <span className='text-justify'>
                Ceevo is a registration and login system built with react,
                express and mongodb for client side, server side and database
                respectively. Features include email verification for creating
                an account, email redirect link to change password etc, test it
                out to see a suprising feature I implemented at the end.
              </span>
            </a>
          </li>
        </ul>
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
