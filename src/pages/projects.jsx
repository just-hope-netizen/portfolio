import donLogo from '../assets/image/don-remolo.png'

function Projects() {
  return (
    <main className='projects-container main container-fluid'>
      <header className='page-header row text-center'>
        <h1 aria-label='work.' className='page-header__heading'>
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
          <li className='project m-1 '>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://don-remolo.netlify.app'
              aria-label='don-remolo live demo.'
              className='project__link'
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
              <h5>Don-Remolo</h5>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://don-remolo.netlify.app'
                aria-label='don-remolo live demo.'
                className='project__info__siteName'
              >
                don-remolo.app
              </a>
            </div>
          </li>
          <li className='project m-1 '>
            <a href='/work/conectar' className='project__link'>
              Conectar project summary.
            </a>
            <figure className='project__logo'>
              <span aria-hidden='true'></span>
              <figcaption className='visuallyhidden'>Conectar logo.</figcaption>
            </figure>
            <div className='project__info'>
              <h5>Conectar</h5>
            </div>
          </li>
          <li className='project  m-1 '>
            <a href='/work/john-deere' className='project__link'>
              John Deere project summary.
            </a>
            <figure className='project__logo'>
              <span aria-hidden='true'></span>
              <figcaption className='visuallyhidden'>
                John Deere logo.
              </figcaption>
            </figure>
            <div className='project__info'>
              <h5>John Deere</h5>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://atu300.deere.com'
                aria-label='John Deere live demo.'
                className='project__info__siteName'
              >
                atu300.deere.com
              </a>
            </div>
          </li>
          {/* <li className='project '>
            <a
              aria-label='Personal Website live demo.'
              target='_blank'
              rel='noopener noreferrer'
              href='https://olaolu.dev'
              className='project__link'
            >
              Personal Website project summary.
            </a>
            <figure className='project__logo'>
              <span aria-hidden='true'></span>
              <figcaption className='visuallyhidden'>
                Personal Website logo.
              </figcaption>
            </figure>
            <div className='project__info'>
              <h5>Personal Website</h5>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://olaolu.dev'
                aria-label='Personal Website live demo.'
                className='project__info__siteName'
              >
                olaolu.dev
              </a>
            </div>
          </li> */}
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
