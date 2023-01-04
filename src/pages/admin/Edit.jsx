import { useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import NavigateBack from '../../components/NavigateBack';
import { updateData } from '../../helpers/api';

function Edit() {
  const [pId, setPId] = useState();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const titleRef = useRef();
  const descRef = useRef();
  const siteRef = useRef();
  const introRef = useRef();
  const toolsRef = useRef();

  // get query data
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(['projects']);

  function pickId(id) {
    setPId(id);
    handleShow();
  }

  function handleSave(id) {
    const title = titleRef.current.value;
    const desc = descRef.current.value;
    const site = siteRef.current.value;
    const intro = introRef.current.value;
    const tools = toolsRef.current.value;

    const data = {
      title,
      desc,
      site,
      intro,
      tools: tools.split(','),
    };

    updateData(data, id);
    alert('Project added!');
    navigate('/project');
  }

  return (
    <>
      <main className='projects-container main container-fluid mb-5 pb-5 px-md-5'>
        <NavigateBack backRoute={'/admin'} />
        <section className=' container-lg  projects d-flex  flex-wrap justify-content-between align-items-center px-3 '>
          {data?.map((item) => (
            <div key={item.id} className='project mb-4 edit-project'>
              <div className='position-absolute bg-light '>
                <button className='btn' onClick={() => pickId(item.id)}>
                  Edit
                </button>

                {/* <button onClick={() => pickd(item.id)}>Delete</button> */}
              </div>
              <img
                src={item.img}
                alt={'project snapshot'}
                className='project__logo-img'
              />
            </div>
          ))}
        </section>
      </main>
      {show &&
        data
          ?.filter((i) => i.id === pId)
          .map((item) => (
            <Modal show={show} onHide={handleClose} key={item.id}>
              <Modal.Header closeButton>
                <Modal.Title>Update Project</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Input
                  value={item.title}
                  label={'Title'}
                  refer={titleRef}
                  type={'text'}
                />
                <Input
                  value={item.intro}
                  label={'Introduction text'}
                  type={'text'}
                  refer={introRef}
                />
                <Input
                  value={item.site}
                  label={'Site'}
                  refer={siteRef}
                  type={'url'}
                />
                <Input
                  value={item.tools}
                  type={'text'}
                  label={'Tools'}
                  refer={toolsRef}
                />
                <div className='mt-2'>
                  <label className='input-label'>Description</label>
                  <textarea
                    ref={descRef}
                    defaultValue={item.desc}
                    rows='7'
                    className='p-2'
                  ></textarea>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                  Close
                </Button>
                <Button variant='primary' onClick={() => handleSave(item.id)}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          ))}
    </>
  );
}

export default Edit;
