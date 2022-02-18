import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente "<App.js />"', () => {
  it(
    'Teste se o topo da aplicação contém um conjunto fixo de links de navegação.',
    () => {
      renderWithRouter(<App />);
      const linkHome = screen.getByRole('link', { name: 'Home' });
      expect(linkHome).toBeDefined();
      const linkAbout = screen.getByRole('link', { name: 'About' });
      expect(linkAbout).toBeDefined();
      const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
      expect(linkFavorite).toBeDefined();
    },
  );
  it(
    'Testa se o link leva para Home',
    () => {
      const { history } = renderWithRouter(<App />);
      const linkHome = screen.getByRole('link', { name: 'Home' });
      userEvent.click(linkHome);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/');
    },
  );
  // it('', () => {});
  it(
    'Testa se o link leva para /about',
    () => {
      const { history } = renderWithRouter(<App />);
      const linkAbout = screen.getByRole('link', { name: 'About' });
      userEvent.click(linkAbout);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/about');
    },
  );
  it(
    'Testa se o link leva para /favorites,',
    () => {
      const { history } = renderWithRouter(<App />);
      const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
      userEvent.click(linkFavorite);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/favorites');
    },
  );
  it(
    'Testa se indo para uma URL errada exibi Not Found,',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/fjafjasasfj');
      const notFound = screen.getByRole('heading', { name: /Page requested not found/i,
        level: 2 });
      expect(notFound).toBeDefined();
    },
  );
});
