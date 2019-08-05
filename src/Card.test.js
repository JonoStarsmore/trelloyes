// make React available
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';


//this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders button', () => {
  const tree = renderer
    .create(<Card />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });