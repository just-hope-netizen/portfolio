import { Link } from 'react-router-dom'
function Footer() {
    return (
      <footer
        data-section='footer'
        aria-hidden='false'
        id='site-footer'
        className='lhhpGw hLNYup'
      >
        <div className='inner-content'>
          <div className='footer-main'>
            <div className='basic-contact BsRLL'>
              <span className='say-hello'>Say Hello</span>
              <ul>
                <li >
                  <a href='mailto:hello@Hope.dev' >
                    hello@Hope.dev
                  </a>
                  </li>
              </ul>
            </div>
            <ul
            
            >
              <li>
                <a href='https://Hope.dev'>
                  Home
                </a>
              </li>
              <li >
                <a href='https://Hope.dev/shelf' >
                  My Shelf
                </a>
              </li>
              <li >
                <a
                  href='https://Hope.dev/resume'
                  target='_blank'
                  rel='noreferrer noopener'
                  
                >
                  My Résumé
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-bottom'>
            <span>© Hope Peter 2022</span>
            <ul className='social-contact iMAreF'>
              
              <li >
                <Link
                  to='https://github.com/just-hope-netizen'
                  aria-label='Hope on GitHub'
                  target='_blank'
                >
                  GH
                </Link>
              </li>
              <li >
                <a
                  href='https://linkedin.com/in/mrHope'
                  aria-label='Hope on LinkedIn'
                  target='_blank'
                  rel='noreferrer noopener'
                  
                >
                  LN
                </a>
              </li>
              <li >
                <a
                  href='https://youtube.com/channel/UC5UiydmTsiN17NmsYmmWqEA'
                  aria-label="Hope's YouTube channel"
                  target='_blank'
                  rel='noreferrer noopener'
                  
                >
                  YT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
}

export default Footer;