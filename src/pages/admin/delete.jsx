import { useRef } from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Input from '../../components/Input';

function Delete(props) {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [acc, setAcc] = useState(false);

  const accessRef = useRef();

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className='btn bg-danger text-light rounded-0'
      >
        Delete
      </button>

      {show && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {acc ? (
              ''
            ) : (
              <>
                {' '}
                <Input label={'Accesscode'} refer={accessRef} type={'text'} />
                {error && <span className='text-danger'>Wrong code! </span>}
              </>
            )}
          </Modal.Body>
          {acc ? (
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Cancel
              </Button>
              <Button variant='primary'>Delete</Button>
            </Modal.Footer>
          ) : (
            <Modal.Footer>
              <Button variant='primary' onClick={verifyUser}>
                Enter
              </Button>
            </Modal.Footer>
          )}
        </Modal>
      )}
    </>
  );
}

export default Delete;
