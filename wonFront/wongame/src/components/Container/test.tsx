import { screen } from '@testing-library/react';
import 'jest-styled-components';
import theme from 'styles/theme';
import { renderWhitTheme } from 'utils/test/helpers';
import { Container } from '.';
import 'jest-styled-components';
describe('Container', () => {
  it('shoud render the Container', () => {
    const { container } = renderWhitTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    );
    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  max-width: 130rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(3.2rem) / 2;
  padding-right: calc(3.2rem) / 2;
}

<div
  class="c0"
>
  <span>
    Won Games
  </span>
</div>
`);
  });
});
