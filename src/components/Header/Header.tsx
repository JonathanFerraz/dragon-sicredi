import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MenuItem } from '@material-ui/core';

import { ReactComponent as Logo } from '../../assets/img/dragon-logo-text.svg';
import { ReactComponent as SignOutIcon } from '../../assets/img/signOut.svg';
import { ReactComponent as User } from '../../assets/img/user.svg';
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

  console.log(isActive);

  return (
    <Wrapper id={'headerPage'}>
      <Container>
        <Link to={'/home'}>
          <Logo width={'130px'} />
        </Link>
        <UserContainer onClick={toggle}>
          {user ? (
            <span>
              {user.name} {user.lastName}
            </span>
          ) : (
            <span>Sem identificação</span>
          )}
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
