function About() {
  return (
    <main className='main container pb-3'>
      <p>
        I'm Hope a Nigeria based software developer. I specialise in interface
        design and functionality in web-based applications with a focus on
        simplicity & usability.
      </p>
      <p>
        I'm passionate about design and functionality and how the two can be use
        to create good user experience.{' '}
      </p>
      <p>
        Outside of work my hobbies include playing video games, watching sci-fi
        shows & movies and experimenting with the latest tech.
      </p>
      <span className='divider my-5'></span>
      <h4 className='work-section-heading'>Work</h4>
      <div className='my-3'>
        <h6 className='work-link'>Freelancing</h6>
        <p>2022 -</p>
      </div>
      <div>
        <h6>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://bizzdeskgroup.com'
            aria-label='bizz desk site.'
            className='work-link'

          >
            Bizz Desk
          </a>
        </h6>
        <span>Intern</span>
        <p>2021 - 2022</p>
      </div>
    </main>
  );
}

export default About;
