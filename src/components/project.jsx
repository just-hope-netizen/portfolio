import Tool from './tool';
import ProjectAbout from './project-about';

function Project({
  desc,
  img,
  tools,
  livesite,
  intro,
  title,
  hover,
  showProject,
  removeClass,
  className,
  project,
  hideProject,
}) {
  
  return (
    <>
      <li
        className='project m-1 mb-4 '
        onClick={() => {
          showProject(title);
        }}
        onMouseOver={() => {
          hover(title);
        }}
        onMouseOut={() => {
          removeClass();
        }}
      >
        <img
          src={img}
          alt={img.caption}
          className='project__logo-img'
        />
        <div
          className={
            className === title ? 'project__info active' : 'project__info'
          }
        >
          <h4 className='fw-bold'>{title}</h4>
          <p>{intro}</p>
          <div className='d-flex flex-wrap justify-content-center mb-3'>
            {tools?.map((i, index) => (
              <Tool key={index} tool={i} />
            ))}
          </div>
        </div>
      </li>
      <ProjectAbout
        className={
          project === title ? 'project__about slide' : 'project__about'
        }
        cancel={hideProject}
        src={img}
        alt={img.caption}
        href={livesite}
        project_name={title}
        project_intro={intro}
      >
        {' '}
        <p className='text-justify'>{desc}</p>
      </ProjectAbout>
    </>
  );
}

export default Project;
