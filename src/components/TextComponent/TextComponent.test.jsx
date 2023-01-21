import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>texto</TextComponent>);
    const text = screen.getByText('texto');

    expect(text).toBeInTheDocument();
  });

  it('should render with the correct style', () => {
    renderTheme(<TextComponent>texto</TextComponent>);
    const text = screen.getByText('texto');

    expect(text).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(<TextComponent>texto</TextComponent>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <p
        class="c0"
      >
        texto
      </p>
    `);
  });
});
