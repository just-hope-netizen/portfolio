import { Link } from 'react-router-dom';
import donLogo from '../assets/image/don-remolo.png';
import ceevoLogo from '../assets/image/ceevo.png';
import Contact from './contact';
function Home() {
  return (
    <main className='main container px-md-5'>
      <div className='row mx-md-5 pb-5'>
        <small>Hi, my name is</small>
        <h1>Hope Peter</h1>
        <p className='intro'>
          I am a Fullstack Software developer, as a Software Engineer I build
          products with high functionality, user friendly, accessible, flexible,
          mobile responsive & custom website for my employer.
        </p>
        <p className='intro'>
          I mostly work with Javascript, Node, and new technologies as specified
          by employers and clients. I enjoy supporting Small/Medium Business
          with technology.
        </p>

        <div className='home-links-list my-3'>
          <ul className='home-links d-flex justify-content-between align-items-center ps-0'>
            <li>
              <a
                className=' github-link d-flex justify-content-center align-items-center'
                href='https://github.com/just-hope-netizen'
                title='Github'
                target='_blank'
                rel='noreferrer'
              >
                <span className='icon icon-github'></span>
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
        <div className=' mt-4  '>
          <h4 className='h3  feature-projects-heading'>Featured projects</h4>
          <p className=''>
            A collection of some side projects that i have shipped recently.
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
              <span>
                Don-Remolo is a CRUD web app built using react and express for
                the frontend and backend respectively with paypal intergration
                for payment and mongoDB for database. Don-Remolo is a e-commerce
                web app with amazing features like auth, user create, edit and
                delete their profile and much more.
              </span>
            </a>
            <Link to={'/contact'}> contact me for admin access</Link>
          </li>
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
                    src={ceevoLogo}
                    alt='don-remolo logo'
                    className='project__logo-img'
                  />
                </span>
                <figcaption className='visuallyhidden'>
                  Don-Remolo logo.
                </figcaption>
              </figure>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                voluptatem maiores! Similique illo commodi tempora natus, rerum,
                accusamus expedita possimus consectetur aliquid atque optio
                maiores molestias velit necessitatibus totam perferendis.
              </span>
            </a>
          </li>
        </ul>
      </div>
      <Contact className={true}/>
    </main>
  );
}

export default Home;
