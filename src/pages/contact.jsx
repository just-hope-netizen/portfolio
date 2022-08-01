import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [btnSpinner, setBtnSpinner] = useState();

  const navigate = useNavigate();
  async function handleSubmit(e) {
    setBtnSpinner(true)
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      message: message,
    };
    try {
      
      const res = await axios.post('https://formspree.io/f/xzbwpevg', data, {
        headers: {
        Accept: 'application/json',
      },
    });
    if (res.data.ok === true) {
      navigate('/thanks');
    } else {
      alert(
        'Email server is probably down, you can contact me at hopepeter007@gmail.com.'
      );
      setBtnSpinner(false)
    }
  } catch (err) {
     alert(
       'Email server is probably down, you can contact me at hopepeter007@gmail.com.'
     );
      setBtnSpinner(false);
    
  }
  }

  return (
    <div className={`${props.className ? 'mt-4' : 'main'} container pb-5`}>
      <header className=' text-center'>
        <h4 className=' contact-heading'>Send me a message!</h4>
        <p>
          Got a question or proposal, or just want <br /> to say hello? Go
          ahead.
        </p>
      </header>

      <form className='contact-form mt-5' onSubmit={handleSubmit}>
        <div className='form-name-email w-100'>
          <div className='d-flex flex-column w-100'>
            <label htmlFor='name '>Name</label>
            <input
              id='text'
              type='text'
              name='name'
              className='input'
              placeholder='Enter your name'
              required={true}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className='d-flex flex-column w-100 email-wrapper'>
            <label htmlFor='email'>Email Address</label>
            <input
              id='email'
              type='email'
              name='email'
              className='input'
              placeholder='Enter your email'
              required={true}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <textarea
          className='mt-4'
          rows={5}
          id='message'
          name='message'
          placeholder='Hi, we need a web developer for our products/projects. When will you be chanced to discuss it?'
          minLength='30'
          required={true}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />

        <button
          className={`form-btn mt-4 px-5 py-1 ${btnSpinner && 'inactive-btn'}`}
          type={btnSpinner ? 'button' : 'submit'}
        >
          {btnSpinner ? null : 'Send'}
          <span className={btnSpinner ? 'loader' : null}></span>
        </button>
      </form>
      <div
        id='Announcer'
        role='status'
        aria-live='assertive'
        aria-atomic='true'
        aria-hidden='true'
        className='visuallyhidden'
      >
        You just navigated to: Contact
      </div>
    </div>
  );
}

export default Contact;
