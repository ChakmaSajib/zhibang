import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Counter from './Counter';
import { PausePresentation } from '@material-ui/icons';
import { Paper } from '@material-ui/core';

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

afterEach(() => {
  cleanup();
});

describe('Counter component', () => {
  it('should render it with text', () => {
    const headerEl = getByTestId('header');
    expect(headerEl.textContent).toBe('Hello world');
  });

  it('should initally start with the text of 0', () => {
    const counter = getByTestId('counter');

    expect(counter.textContent).toBe('0');
  });

  it('should input initally start with the text of 1', () => {
    const inputEl = getByTestId('input');

    expect(inputEl.value).toBe('1');
  });

  it('should add button renders with +', () => {
    const addBtn = getByTestId('add-btn');
    expect(addBtn.textContent).toBe('+');
  });

  it('should substract button renders with +', () => {
    const subtractBtn = getByTestId('subtract-btn');
    expect(subtractBtn.textContent).toBe('+');
  });

  it('change value should works correctly', () => {
    const inputEl = getByTestId('input');
    expect(inputEl.value).toBe('1');

    fireEvent.change(inputEl, {
      target: {
        value: '5'
      }
    });

    expect(inputEl.value).toBe('5');
  });

  it('click on + button add 1 value ', () => {
    const btnAdd = getByTestId('addBtn');
    const countBtn = getByTestId('counter');
    expect(countBtn.textContent).toBe(0);
    fireEvent.click(btnAdd);

    expect(countBtn.textContent).toBe('1');
  });

  it('click on - button subtract 1  ', () => {
    const subtractBtn = getByTestId('subtract-btn');
    const countBtn = getByTestId('counter');
    expect(countBtn.textContent).toBe(0);
    fireEvent.click(subtractBtn);

    expect(countBtn.textContent).toBe('-1');
  });

  it('changing input value and click add button should work correctly ', () => {
    const subtractBtn = getByTestId('subtract-btn');

    const countBtn = getByTestId('counter');
    const inputEl = getByTestId('input');

    fireEvent.change(inputEl, {
      target: {
        value: '5'
      }
    });
    expect(countBtn.textContent).toBe(0);
    fireEvent.click(subtractBtn);

    expect(countBtn.textContent).toBe('5');
  });

  it('changing input value and click - button should work correctly ', () => {
    const subtractBtn = getByTestId('subtract-btn');

    const countBtn = getByTestId('counter');
    const inputEl = getByTestId('input');

    fireEvent.change(subtractBtn, {
      target: {
        value: '5'
      }
    });
    expect(countBtn.textContent).toBe(0);
    fireEvent.click(subtractBtn);

    expect(countBtn.textContent).toBe('-5');
  });

  it('adding and subtracting leads the correct number', () => {
    const subtractBtn = getByTestId('subtract-btn');
    const addBtn = getByTestId('addBtn');
    const countBtn = getByTestId('counter');
    const inputEl = getByTestId('input');

    fireEvent.change(inputEl, {
      target: {
        value: '10'
      }
    });

    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);

    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);

    expect(countBtn.textContent).toBe('20');
    fireEvent.change(inputEl, {
      target: {
        value: '5'
      }
    });

    fireEvent.click(addBtn);
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);

    expect(countBtn.textContent).toBe('15');
  });

  test('counter contain right classname', () => {
    const countBtn = getByTestId('counter');
    const inputEl = getByTestId('input');
    const subtractBtn = getByTestId('subtract-btn');
    const addBtn = getByTestId('addBtn');

    expect(countBtn.className).toBe('');
    fireEvent.change(inputEl, {
      target: {
        value: '15'
      }
    });

    fireEvent.click(addBtn);

    expect(countBtn.className).toBe('');
    fireEvent.click(addBtn);
    expect(countBtn.className).toBe('green ');
    fireEvent.click(addBtn);
    expect(countBtn.className).toBe('green ');
    fireEvent.click(subtractBtn);
    expect(countBtn.className).toBe('');

    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    expect(countBtn.className).toBe('red');
  });
});
