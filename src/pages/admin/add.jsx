import { useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ImageUploader from '../../components/image-uploader';
import Input from '../../components/Input';
import NavigateBack from '../../components/NavigateBack';
import { uploadImage, addData } from '../../helpers/api';

function Add() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [image, setImage] = useState('');

  const titleRef = useRef();
  const descRef = useRef();
  const siteRef = useRef();
  const introRef = useRef();
  const toolsRef = useRef();
  const accessRef = useRef();

  const handleClose = () => {
    setShow(false);
    setError(false);
  };

  const handleShow = () => setShow(true);

  const verifyUser = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'portfolio');
    data.append('cloud_name', 'dz14l6crq');

    if (
      accessRef.current.value.toLowerCase() ===
      process.env.REACT_APP_ACCESS_CODE
    ) {
      createProject(data);
    } else {
      setError(true);
      accessRef.current.style.border = '1px solid red';
    }
  };

  const createProject = (data) => {
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
      addData(projectDetails).then((res) => {
        if (res.id) {
          alert('Project added!');
          navigate('/');
        } else {
          alert('Project failed to be added!');
        }
      });
    });
  };

  return (
    <main className='main container px-md-5'>
      <NavigateBack backRoute={'/admin'} />

      <div className='input-container'>
        <Input type={'text'} label={'Title'} name={'title'} refer={titleRef} />
        <Input
          type={'text'}
          label={'Introduction text'}
          name={'intro'}
          refer={introRef}
        />
        <Input type={'url'} label={'Site'} name={'livesite'} refer={siteRef} />
        <Input
          type={'text'}
          label={'Tools'}
          name={'tools'}
          refer={toolsRef}
          placeholder={'React, Css'}
        />
        <div className='mt-2'>
          <label className='input-label'>Description</label>
          <textarea ref={descRef} rows='7' className='p-2'></textarea>
        </div>

        <ImageUploader
          state={setImage}
          placeholder={'Image'}
          className='input-label'
        />

        <Button variant='primary' onClick={handleShow} className='mt-3'>
          Save
        </Button>
      </div>
      {show && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input label={'Accesscode'} refer={accessRef} type={'text'} />
            {error && <span className='text-danger'>Wrong code! </span>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Cancel
            </Button>
            <Button variant='primary' onClick={verifyUser}>
              Upload
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </main>
  );
}

export default Add;
