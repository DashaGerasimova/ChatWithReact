import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import MessageField from '../../app/containers/chat/components/message_field/index'

it('should render field', () => {
  const tree = toJson(shallow(<MessageField submit={()=>{}} />));
  expect(tree).toMatchSnapshot();
});
	
// it('should match its snapshot with items', () => {
//   const items = ['message1', 'message2', 'message3'];
//   const tree = renderer.create(
//     <List messages={items} />
//   ).toJSON();

// expect(tree).toMatchSnapshot();
// });