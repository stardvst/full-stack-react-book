import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import DisplayText from './DisplayText';

describe('test displaytext', () => {
  it('renders without crashing', () => {
    const { baseElement } = render(<DisplayText />);
    console.log(baseElement.innerHTML);
    expect(baseElement).toBeInTheDocument();
  });

  it('receives input text', () => {
    const text = 'testuser';
    const { getByTestId } = render(<DisplayText />);

    const input = getByTestId('name-input');
    fireEvent.change(input, { target: { value: text } });

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(text);
  });

  it('show welcome message', () => {
    const text = 'testuser';
    const message = `welcome to react testing, ${text}`;

    const { getByTestId } = render(<DisplayText />);
    const input = getByTestId('name-input');
    const label = getByTestId('final-msg');

    fireEvent.change(input, { target: { value: text } });
    const btn = getByTestId('name-submit');
    fireEvent.click(btn);

    expect(label).toBeInTheDocument();
    expect(label.innerHTML).toBe(message);
  });

  it('matches snapshot', () => {
    const { baseElement } = render(<DisplayText />);
    expect(baseElement).toMatchSnapshot();
  });
});
