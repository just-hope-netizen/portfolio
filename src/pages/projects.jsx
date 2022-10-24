import { useState } from 'react';
import Project from '../components/project';
import Services from '../components/services';
import SkillsExperience from '../components/skills-experience';

import { useQueryClient } from '@tanstack/react-query';

function Projects() {
  const [className, setClassName] = useState();
  const [project, setProject] = useState();

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(['projects']);
  
  function setClass(className) {
    setClassName(className);
  }
  
  function removeClass() {
    setClassName();
  }
  function showProject(project) {
    setProject(project);
  }

  function hideProject() {
    setProject();
  }
  


  return (
    <>
      <main className='projects-container main container-fluid mb-5 pb-5'>
        <header className='row text-center'>
          <p className='page-header__desc'>
            Selected projects I've worked on in the past.
          </p>
        </header>

        <section className=' container-lg   pb-4'>
          <ul
            aria-label='projects'
            className='projects d-flex  flex-wrap justify-content-between align-items-center p-3 my-3'
          >
            {data?.map((item) => (
              <Project
                key={item.id}
                desc={item.desc}
                intro={item.intro}
                title={item.title}
                livesite={item.site}
                tools={item.tools}
                img={item.img}
                hover={setClass}
                showProject={showProject}
                removeClass={removeClass}
                className={className}
                project={project}
                hideProject={hideProject}
              />
            ))}
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
