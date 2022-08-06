import ceevoLogo from '../assets/image/ceevo.png';
import donLogo from '../assets/image/don-remolo.png';
import { Logo } from '../assets/svg';

function Projects() {
  return (
    <main className='projects-container main container-fluid mb-5 pb-5'>
      <header className='page-header row text-center'>
        <h1 aria-label='work.' className='projects-heading'>
          <span aria-hidden='true'>
            <span>/</span>Projects<span>.</span>
          </span>
        </h1>
        <p className='page-header__desc'>
          Selected projects I've worked on in the past.
        </p>
      </header>

      <section className=' container-lg   pb-4'>
        <ul
          aria-label='projects'
          className='projects d-flex  flex-wrap justify-content-between align-items-center p-3 my-3'
        >
          <li className='project m-1 mb-sm-2 '>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://don-remolo.netlify.app'
              aria-label='don-remolo live demo.'
            >
              <figure className='project__logo'>
                <span aria-hidden='true' className='project__logo-wrapper'>
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
            </a>
            <div className='project__info'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://don-remolo.netlify.app'
                aria-label='don-remolo live demo.'
              >
                Don-Remolo
              </a>
            </div>
          </li>
          <li className='project m-1 mb-sm-2 '>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://ceevo.netlify.app'
              aria-label='ceevo live demo.'
            >
              <figure className='project__logo'>
                <span aria-hidden='true' className='project__logo-wrapper'>
                  <img
                    src={ceevoLogo}
                    alt='ceevo logo'
                    className='project__logo-img'
                  />
                </span>
                <figcaption className='visuallyhidden'>Ceevo logo.</figcaption>
              </figure>
            </a>
            <div className='project__info'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://ceevo.netlify.app'
                aria-label='ceevo live demo.'
              >
                Ceevo
              </a>
            </div>
          </li>

          <li className='project m-1 mb-sm-2'>
            <a
              aria-label='Personal Website live demo.'
              target='_blank'
              rel='noopener noreferrer'
              href='https://hope-peter.tech'
            >
              <figure className='project__logo'>
                <span aria-hidden='true' className='project__logo-wrapper'>
                  <Logo />
                </span>
                <figcaption className='visuallyhidden'>
                  Personal Website logo.
                </figcaption>
              </figure>
            </a>
            <div className='project__info'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='//hope-peter.netlify.app'
                aria-label='Personal Website live demo.'
              >
                Personal Website
              </a>
            </div>
          </li>
        </ul>
      </section>
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
  );
}

export default Projects;
