import { useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import NavigateBack from '../../components/NavigateBack';
import { updateData } from '../../helpers/api';
import Delete from './delete';

function Edit() {
  const [pId, setPId] = useState();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [acc, setAcc] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const titleRef = useRef();
  const descRef = useRef();
  const siteRef = useRef();
  const introRef = useRef();
  const toolsRef = useRef();
  const accessRef = useRef();
  // get query data
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(['projects']);

  const verifyUser = () => {
    if (
      accessRef.current.value.toLowerCase() ===
      process.env.REACT_APP_ACCESS_CODE
    ) {
      setAcc(true);
      setError(false);
    } else {
      setError(true);
      accessRef.current.style.border = '1px solid red';
    }
  };

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
    navigate('/projects');
  }

  return (
    <>
      <main className='projects-container main container-fluid mb-5 pb-5 px-md-5'>
        <NavigateBack backRoute={'/admin'} />
        <section className=' container-lg  projects d-flex  flex-wrap justify-content-between align-items-center px-3 '>
          {data?.map((item) => (
            <div key={item.id} className='project mb-4 edit-project'>
              <div className='position-absolute start-0 end-0 d-flex justify-content-between '>
                <button
                  className='btn bg-light rounded-0'
                  onClick={() => {
                    setPId(item.id);
                    handleShow();
                  }}
                >
                  Edit
                </button>
                <Delete />
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
                <Input label={'Accesscode'} refer={accessRef} type={'text'} />
                {error && <span className='text-danger'>Wrong code! </span>}
              </Modal.Body>
              {acc ? (
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant='primary' onClick={() => handleSave(item.id)}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              ) : (
                <Modal.Footer>
                  <Button variant='primary' onClick={verifyUser}>
                    Upload
                  </Button>
                </Modal.Footer>
              )}
            </Modal>
          ))}
    </>
  );
}

export default Edit;
