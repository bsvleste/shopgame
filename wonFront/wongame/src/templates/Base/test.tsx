import { screen } from '@testing-library/react';
import Base from '.';
import 'jest-styled-components';
import { renderWhitTheme } from 'utils/test/helpers';

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock menu"></div>;
    }
  };
});

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>;
    }
  };
});

describe('Base', () => {
  it('shoud render menu,footer and menu', () => {
    renderWhitTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    );
    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument();
  });
});
