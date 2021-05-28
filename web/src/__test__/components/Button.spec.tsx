import React from 'react';

import { cleanup } from '@testing-library/react';
import { render, shallow } from 'enzyme';

import { Button } from '../../components';

describe('Testing Button Component', () => {
  const handleClick = jest.fn();

  const wrapper = render(
    <Button variant="solid" onClick={handleClick()}>
      Teste
    </Button>,
  );

  it('should render correctly', () => {
    expect(wrapper);
  });

  it('should be have a prop onClick', () => {
    expect(wrapper.prop('onClick')).toBe(handleClick());
  });

  it('should be have a prop variant', () => {
    expect(wrapper.prop('variant')).toBe('solid');
  });

  it('should be call a click function at least once', () => {
    const wrapperButton = shallow(
      <Button variant="solid" onClick={handleClick()}>
        Teste
      </Button>,
    );

    wrapperButton.simulate('click');

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  afterEach(cleanup);
});
