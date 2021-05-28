import React from 'react';
import { Helmet } from 'react-helmet';

import { motion } from 'framer-motion';

import { Header, Footer, SubHeader } from '../index';
import { Main, Wrapper } from './styles';

interface LayoutProps {
  titlePage?: string;
  subHeader?: boolean;
}

const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: 15,
  },
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  titlePage,
  subHeader,
}) => {
  return (
    <>
      <Helmet
        title={titlePage ? titlePage + ' | Dragon' : 'Sicredi | Dragon'}
      />
      <Main>
        <Header />
        <motion.div
          initial={'out'}
          animate={'in'}
          exit={'out'}
          variants={pageTransition}
        >
          {subHeader && <SubHeader />}
          <Wrapper>{children}</Wrapper>
          <Footer />
        </motion.div>
      </Main>
    </>
  );
};
