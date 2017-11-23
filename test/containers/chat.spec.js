import React from 'react';
import { shallow } from 'enzyme';
import { Banana } from '../../app/containers/chat/chat_page';

it('should render a Banana component correctly', () => {

  const wrapper = shallow(
    <Banana />,
  );

  expect(wrapper).toMatchSnapshot();
});