import { screen } from '@testing-library/react';
import { renderWhitTheme } from 'utils/test/helpers';
import Banner from '.';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
};
describe('Banner', () => {
  it('shoud render the carrectly', () => {
    const { container } = renderWhitTheme(<Banner {...props} />);
    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Play the new/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /Defy death/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render a ribbon', () => {
    renderWhitTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    );
    const ribbon = screen.getByText(/My ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3cd3c1' });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
  });
});
