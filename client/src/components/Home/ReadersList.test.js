import React from 'react';
import {shallow} from 'enzyme';
import {ReadersList} from './ReadersList';


describe('ReadersList', () => {

  const props = {
    readers: [
      {name: "1"},
      {name: "2"}
    ],
    health: [
      {reader: "1"},
      {reader: "2"}
    ]
  };
  const readerList = shallow(<ReadersList {...props}/>);

  it('should render properly', function () {
    expect(readerList).toMatchSnapshot();
  });

  it('should contains list of readers', function () {
    expect(readerList.find('DisplayReader').length)
      .toBe(props.readers.length);
  });

  it('should contains ReadersHeader component', function () {
    expect(readerList.find('ReadersHeader')
      .exists()).toBe(true);
  });
});