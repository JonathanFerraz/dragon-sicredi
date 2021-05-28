import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MenuItem } from '@material-ui/core';

import { ReactComponent as SignOutIcon } from '../../assets/icons/signOut.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Logo } from '../../assets/logo/dragon_logo.svg';
import { useAuth } from '../../hooks/useAuth';
import useRedirect from '../../hooks/useRedirect';
import { Wrapper, Container, UserContainer, MenuMobile } from './styles';

export const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const redirect = useRedirect();
  const { user, signOut } = useAuth();

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <Wrapper id={'headerPage'}>
      <Container>
        <Link to={'/home'}>
          <Logo width={'130px'} />
        </Link>
        <UserContainer onClick={toggle}>
          {user ? <span>{user.name}</span> : <span>Sem identificação</span>}
          <div>
            <User />
          </div>
          <MenuMobile className={isActive ? 'active' : ''}>
            <MenuItem
              onClick={() =>
                setTimeout(() => {
                  redirect(`/login`);
                  setIsActive(false);
                  signOut();
                }, 500)
              }
            >
              <div>
                <Link to={'#'}>
                  <SignOutIcon />
                  Logout
                </Link>
              </div>
            </MenuItem>
          </MenuMobile>
        </UserContainer>
      </Container>
    </Wrapper>
  );
};
