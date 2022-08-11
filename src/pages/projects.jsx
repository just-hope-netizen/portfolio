import ceevoLogo from '../assets/image/ceevo-screenshot.png';
import donLogo from '../assets/image/don-remolo-screenshot.png';
import logo from '../assets/image/personal-website-shot.png';
import Services from '../components/services';
import SkillsExperience from '../components/skills-experience';

function Projects() {
  return (
    <>
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
            <li className='project m-1 mb-3 mb-md-0'>
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
                </figure>
              </a>
              <div className='project__info'>
                <span className='tool-used'>Css</span>
                <span className='tool-used'>React</span>
                <span className='tool-used'>Redux</span>
                <span className='tool-used'>Express.js</span>
                <span className='tool-used'>Nodemailer</span>
                <span className='tool-used'>MongoDb</span>
                <span className='tool-used'>Jsonwebtoken</span>
              </div>
            </li>
            <li className='project m-1 mb-3 mb-md-0'>
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
                </figure>
              </a>
              <div className='project__info'>
                <span className='tool-used'>Css</span>
                <span className='tool-used'>React</span>
                <span className='tool-used'>Redux</span>
                <span className='tool-used'>Express.js</span>
                <span className='tool-used'>Nodemailer</span>
                <span className='tool-used'>MongoDb</span>
              </div>
            </li>

            <li className='project  mb-3 mb-md-0'>
              <a
                aria-label='Personal Website live demo.'
                target='_blank'
                rel='noopener noreferrer'
                href='https://hope-peter.tech'
              >
                <figure className='project__logo'>
                  <span aria-hidden='true' className='project__logo-wrapper'>
                    <img
                      src={logo}
                      alt='personal website logo'
                      className='project__logo-img'
                    />
                  </span>
                </figure>
              </a>
              <div className='project__info'>
                <span className='tool-used'>Css</span>
                <span className='tool-used'>React</span>
                <span className='tool-used'>Bootstrap</span>
              </div>
            </li>
          </ul>
        </section>
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
