import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import List from '../../app/containers/chat/components/messages_list/index'

it('should render a todo item ', () => {
  const tree = toJson(shallow(<List messages={[]} />));
  expect(tree).toMatchSnapshot();
});
	
it('should match its snapshot with items', () => {
  const items = ['message1', 'message2', 'message3'];
  const tree = renderer.create(
    <List messages={items} />
  ).toJSON();

expect(tree).toMatchSnapshot();
});