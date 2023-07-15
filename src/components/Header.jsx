import { Link, useLocation } from 'react-router-dom';
import { TbDog } from 'react-icons/tb';
import { BiSolidSearch } from 'react-icons/bi';

const Header = () => {
  const location = useLocation();

  return (
    <nav>
      {location.pathname !== '/' && <div className='notch'></div>}
      <ul>
        <li>
          <Link
            to='/'
            className={location.pathname === '/' ? 'active-link' : ''}
          >
            <TbDog size={25} />
          </Link>
        </li>
        <li>
          <Link
            to='/search'
            className={
              location.pathname.includes('/search') ? 'active-link' : ''
            }
          >
            <BiSolidSearch size={25} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
