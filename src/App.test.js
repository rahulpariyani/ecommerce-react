import { render, screen } from '@testing-library/react';
import App from './App';

describe('My App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });
});