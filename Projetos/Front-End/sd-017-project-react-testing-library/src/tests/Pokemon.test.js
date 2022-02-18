import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import Pokemon from '../components/Pokemon';
import data from '../data';

describe('Teste o componente <Pokemon.js />', () => {
  const MoreDetails = 'More details';
  it(
    'Teste se é renderizado um card com as informações de determinado pokémon.',
    () => {
      renderWithRouter(<Pokemon pokemon={ data[0] } />);
      const pokemonName = screen.getByText('Pikachu');
      const pokemonType = screen.getByText('Electric');
      const pokemonWeigth = screen.getByText('Average weight: 6.0 kg');
      const pokemonImg = screen.getByRole('img', {
        name: 'Pikachu sprite',
      });
      expect(pokemonName).toBeDefined();
      expect(pokemonType).toBeDefined();
      expect(pokemonWeigth).toBeDefined();
      expect(pokemonImg).toBeDefined();
      expect(pokemonImg.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    },
  );
  it(
    'Teste se o card do Pokémon contém um link de mais detalhes do Pokémon',
    () => {
      renderWithRouter(<Pokemon pokemon={ data[0] } />);
      const moreDetailsLink = screen.getByRole('link', { name: MoreDetails });
      expect(moreDetailsLink).toBeDefined();
      expect(moreDetailsLink.getAttribute('href')).toBe('/pokemons/25');
    },
  );
  it(
    'Teste se ao clicar no link de navegação é feito o redirecionamento da pagina',
    () => {
      const { history } = renderWithRouter(<Pokemon pokemon={ data[0] } />);
      const moreDetailsLink = screen.getByRole('link', { name: MoreDetails });
      userEvent.click(moreDetailsLink);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/pokemons/25');
    },
  );
  it(
    'Teste se existe um icone de estrela nos pokemons favoritados',
    () => {
      renderWithRouter(<App />);
      const moreDetailsLink = screen.getByRole('link', { name: MoreDetails });
      userEvent.click(moreDetailsLink);
      const btnFavorite = screen.getByLabelText('Pokémon favoritado?');
      userEvent.click(btnFavorite);
      const imgFavorite = screen.getByRole('img', {
        name: 'Pikachu is marked as favorite' });
      expect(imgFavorite.alt).toBe('Pikachu is marked as favorite');
      expect(imgFavorite.src).toBe('http://localhost/star-icon.svg');
    },
  );
});
