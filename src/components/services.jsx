import { CodeIcon, IntergrationIcon, SupportIcon } from '../assets/svg';

function Services() {
    return (
      <section className='container my-5'>
        <h5 className='text-center my-5'>SERVICES </h5>
        <div className='row  my-3'>
          <article className='col-lg-4 my-2'>
            <div className='s-card'>
              <div className='s-icon-wrap'>
                <CodeIcon />
              </div>
              <h5 className='s-heading'>Web Development</h5>
              <p>
                I build simple, flexible, mobile responsive &amp; custom website
                for individuals &amp; small/medium sized company. With
                usability, accessibility &amp; functionality in mind.
              </p>
            </div>
          </article>
          <article className='col-lg-4 my-2'>
            <div className='s-card'>
              <div className='s-icon-wrap'>
                <IntergrationIcon />
              </div>
              <h5 className='s-heading'>Integration</h5>
              <p>
                I'll help you integrate 3rd party APIs into your web app. App
                integration helps manage &amp; keep your data in sync, automate
                task, enhance productivity &amp; drive more revenue.
              </p>
            </div>
          </article>
          <article className='col-lg-4 my-2'>
            <div className='s-card'>
              <div className='s-icon-wrap'>
                <SupportIcon />
              </div>
              <h5 className='s-heading'>Continous Support</h5>
              <p>
                Even after your project is completed, i provide continous
                support wich may includes fixes &amp; update, development of
                additional functionality &amp; features that will make your
                product reach its full potentials.
              </p>
            </div>
          </article>
        </div>
      </section>
    );
}

export default Services;