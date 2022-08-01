import { CheckIcon } from '../assets/svg';

function Thanks() {
  return (
    <div className='main container pb-5 thanks-container'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h1>THANK YOU!</h1>
        <CheckIcon />
        <p className='mt-3 text-center'>
          I appreciate your feedback, rest assure i will get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
}

export default Thanks;
