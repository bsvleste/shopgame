import { FormLink, FormWrapper } from '.';
import 'jest-styled-components';
import { renderWhitTheme } from 'utils/test/helpers';

describe('Form', () => {
  it('shoud render the Form', () => {
    const { container } = renderWhitTheme(
      <FormWrapper>
        <FormLink>My nice Link</FormLink>
      </FormWrapper>
    );
    expect(container.parentElement).toMatchInlineSnapshot(`
.c0 .sc-jSFjdj {
  margin: 3.2rem auto 1.6rem;
}

.c0 .sc-gKAaRy {
  margin: 3.2rem auto 1.6rem;
}

.c1 {
  font-size: 1.4rem;
  color: #030517;
  text-align: center;
}

.c1 a {
  color: #3CD3C1;
  -webkit-text-decoration: none;
  text-decoration: none;
  border-bottom: 0.1rem solid #3CD3C1;
  -webkit-transition: color,border,0.1s ease-in-out;
  transition: color,border,0.1s ease-in-out;
}

.c1 a:hover {
  border-bottom: 0.1rem solid #29b3a3;
  color: #29b3a3;
}

<body>
  <div>
    <div
      class="c0"
    >
      <div
        class="c1"
      >
        My nice Link
      </div>
    </div>
  </div>
</body>
`);
  });
});
