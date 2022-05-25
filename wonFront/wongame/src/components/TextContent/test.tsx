import { render, screen } from '@testing-library/react';
import TextContent, { TextContentProps } from '.';
import 'jest-styled-components';
import { renderWhitTheme } from 'utils/test/helpers';
const props = {
  title: 'Description',
  content: `<h1>Content</h1>`
};
describe('TextContent', () => {
  it('shoud render the TextContent', () => {
    renderWhitTheme(<TextContent {...props} />);
    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument();
  });
  it('should render without title', () => {
    renderWhitTheme(<TextContent {...props} />);
    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument();
  });
  it('should render the title and content', () => {
    renderWhitTheme(<TextContent {...props} />);

    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement;

    expect(wrapper).toHaveStyle({
      color: '#FAFAFA' // theme.colors.white
    });

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    });
  });
});
