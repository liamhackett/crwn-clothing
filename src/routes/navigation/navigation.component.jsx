import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    <p className='nav-link-text'>Shop</p>
                </Link>
                <Link className='nav-link' to='/sign-in'>
                    <p className='nav-link-text'>Sign in</p>
                </Link>
            </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  }

  export default Navigation;