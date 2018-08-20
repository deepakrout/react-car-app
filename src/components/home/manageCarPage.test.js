import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import ManageCarPage from './manageCarPage';

describe ('Manage Car Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      actions: { saveCar: () => { return Promise.resolve(); }},
      car: {id: '', manufacturer: '', make: '', model: '', year: ''}
    };

    const wrapper = mount(<ManageCarPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 3 characters.');

  });
});
