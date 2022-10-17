import { useRef } from 'react';
import ImageUploader from '../components/image-uploader';
import Input from '../components/Input';
import { uploadImage, addData } from '../helpers/api';

function Admin() {
  const titleRef = useRef();
  const descRef = useRef();
  const siteRef = useRef();
  const introRef = useRef();
  const toolsRef = useRef();

  function createProject(data) {
    const title = titleRef.current.value;
    const desc = descRef.current.value;
    const site = siteRef.current.value;
    const intro = introRef.current.value;
    const tools = toolsRef.current.value;

    const projectDetails = {
      title,
      desc,
      site,
      intro,
      tools: tools.split(','),
    };

    uploadImage(data).then((res) => {
      projectDetails.img = res.secure_url;
      addData(projectDetails).then(res =>{
        console.log(res);
      })
    });
  }

  return (
    <main className='main container px-md-5'>
        <div className="input-container">

      <Input type={'text'} label={'Title'} name={'title'} refer={titleRef} />
      <Input
        type={'text'}
        label={'Introduction text'}
        name={'intro'}
        refer={introRef}
        />
      <Input
        type={'text'}
        label={'Description'}
        name={'desc'}
        refer={descRef}
      />
      <Input type={'url'} label={'Site'} name={'livesite'} refer={siteRef} />
      <Input
        type={'text'}
        label={'Tools'}
        name={'tools'}
        refer={toolsRef}
        placeholder={'React, Css'}
      />
      <ImageUploader parentFunc={createProject} placeholder={'Image'}/>
        </div>
    </main>
  );
}

export default Admin;
