import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    expect(
      screen.getByRole('heading', { name: 'Olá mundo' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Olá mundo' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" srcImg="logo.svg" />);
    expect(screen.getByAltText('Olá mundo')).toHaveAttribute('src', 'logo.svg');
  });

  it('should render image logo', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="logo.svg" />,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: inherit;
      }

      .c1 > img {
        max-height: 3rem;
      }

      .c0 {
        color: #0A1128;
        font-size: 2.4rem;
        text-transform: uppercase;
      }

      <h1
        class="c0"
      >
        <a
          class="c1"
          href="#target"
        >
          <img
            alt="Olá mundo"
            src="logo.svg"
          />
        </a>
      </h1>
    `);
  });
});
