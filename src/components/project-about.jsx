import { useEffect } from 'react';
import { BackArrowIcon } from '../assets/svg';
import Backdrop from './backdrop';

function ProjectAbout(props) {
    useEffect(()=>{
                window.scrollTo(0, 0);

    }, [])
    return (
      <aside className={props.className}>
        {' '}
        <Backdrop className='desk__backdrop' onClick={props.cancel} />
        <div className='about__content'>
          <header className=' border-bottom pb-3 d-flex align-items-center justify-content-between'>
            <BackArrowIcon onClick={props.cancel} role='button' />
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={props.href}
              className='visit__btn btn'
            >
              Open project
            </a>
          </header>
          <h4 className='fw-bold mt-5'>{props.project_name}</h4>
          <p className='mb-5'>{props.project_intro}</p>
          <img
            src={props.src}
            alt={props.alt}
            className='mb-5 project__logo-img'
          />
          <h5 className='fw-bold'>About</h5>
          {props.children}
        </div>
      </aside>
    );
}

export default ProjectAbout;