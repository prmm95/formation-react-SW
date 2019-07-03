import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App initTodoList={jest.fn()} tasks={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const wrapper = renderer.create(<App initTodoList={jest.fn()} tasks={[]} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
