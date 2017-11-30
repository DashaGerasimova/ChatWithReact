import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import List from '../../app/containers/chat/components/messages_list/index'

describe('List component', () => {
  it('should render a todo item ', () => {
    const tree = toJson(shallow(<List messages={[]} />));
    expect(tree).toMatchSnapshot();
  });
	
  it('should match its snapshot with items', () => {
    const items = [{"id": "1", "text":"hello"}, {"id": "2", "text":"world"}, {"id": "3", "text":"!"}];
    const tree = renderer.create(
      <List messages={items} />
    ).toJSON();

  expect(tree).toMatchSnapshot();
  });
})