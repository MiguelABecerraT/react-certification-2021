import { render } from '@testing-library/react';

import { MyBtn } from './MenuBtn';

describe('Menu Button', () => {
  test('should contains a button', () => {
    const result = render(MyBtn());
    const element = result.container.querySelector('button:first-of-type');
    expect(element).toBeInTheDocument();
  });

  test('should contains an element with class name = MenuBtn', () => {
    const result = render(MyBtn());
    const element = result.container.querySelector('button:first-of-type');
    expect(element).toBeInTheDocument();
  });

  test('should contains an element with class name = MenuBtnSpan', () => {
    const result = render(MyBtn());
    const element = result.container.querySelector('.MenuBtnSpan');
    expect(element).toBeInTheDocument();
  });

  test('should contains an element with class name = MenuBtnSvg', () => {
    const result = render(MyBtn());
    const element = result.container.querySelector('.MenuBtnSvg');
    expect(element).toBeInTheDocument();
  });
});
