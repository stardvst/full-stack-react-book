import '@testing-library/jest-dom/extend-expect';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import DisplayText from './DisplayText';

afterEach(cleanup);

describe('test displaytext', () => {
  const userFullName = 'test tester';
  const getUserFullNameMock = (username: string): [Promise<string>, jest.Mock<Promise<string>, [string]>] => {
    const promise = new Promise<string>((res, rej) => {
      res(userFullName);
    });
    const getUserFullName = jest.fn(async (username: string): Promise<string> => {
      return promise;
    });
    return [promise, getUserFullName];
  };

  it('renders without crashing', () => {
    const text = 'testuser';
    const [promise, getUserFullName] = getUserFullNameMock(text);
    const { baseElement } = render(<DisplayText getUserFullName={getUserFullName} />);
    console.log(baseElement.innerHTML);
    expect(baseElement).toBeInTheDocument();
  });

  it('receives input text', () => {
    const text = 'testuser';
    const [promise, getUserFullName] = getUserFullNameMock(text);
    const { getByTestId } = render(<DisplayText getUserFullName={getUserFullName} />);

    const input = getByTestId('name-input');
    fireEvent.change(input, { target: { value: text } });

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(text);
  });

  it('shows welcome message', async () => {
    const text = 'test tester';
    const message = `welcome to react testing, ${text}`;
    const [promise, getUserFullName] = getUserFullNameMock(text);

    const { getByTestId } = render(<DisplayText getUserFullName={getUserFullName} />);
    const input = getByTestId('name-input');
    const label = getByTestId('final-msg');

    fireEvent.change(input, { target: { value: text } });
    const btn = getByTestId('name-submit');
    fireEvent.click(btn);

    expect(label).toBeInTheDocument();
    await waitFor(() => promise)
    await waitFor(() => expect(label.innerHTML).toBe(message));
  });

  it('matches snapshot', () => {
    const text = 'testuser';
    const [promise, getUserFullName] = getUserFullNameMock(text);
    const { baseElement } = render(<DisplayText getUserFullName={getUserFullName} />);
    expect(baseElement).toMatchSnapshot();
  });
});
