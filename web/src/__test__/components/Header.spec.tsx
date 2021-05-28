import * as React from 'react';

import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Header } from '../../components';

const mock = {
  user: {
    escopo: ``,
    roles: [],
  },
};

it(`Header renders correctly`, () => {
  const { user } = mock;
  const tree = shallow(<Header />);

  expect(tree).toBeTruthy();
});
