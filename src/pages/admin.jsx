import { Link } from 'react-router-dom';
import LinkComponent from '../components/LinkComponent';

function Admin() {
  return (
    <main className='main container px-md-5'>
      <ul className={` py-5 list-group`}>
        <LinkComponent route={'add'} text={'Add project'} />
        <LinkComponent route={'edit'} text={'Manage project'} />
        <li className='list-group-item disabled'>
          <Link to='blog'>Create article</Link>
        </li>
        <li className='list-group-item disabled'>
          <Link to='blog'>Manage article</Link>
        </li>
      </ul>
    </main>
  );
}

export default Admin;
