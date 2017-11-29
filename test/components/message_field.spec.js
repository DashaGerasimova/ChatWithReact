import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import MessageField from '../../app/containers/chat/components/message_field/index'

describe('MessageField component', () => {
  it('should render field', () => {
    const tree = toJson(shallow(<MessageField submit={()=>{}} />));
    expect(tree).toMatchSnapshot();
  });

  const test_submit = (text) => {
  	
  }  
	
  // it('should ', () => {
  //   const field = shallow(<MessageField submit={test_submit} />)
  //   const tree = renderer.create(
  //     <List messages={items} />
  //   ) .toJSON();
  // expect(tree).toMatchSnapshot();
  // });
})