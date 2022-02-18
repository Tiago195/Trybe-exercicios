import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import FavoritePokemons from '../components/FavoritePokemons';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it(
    'Teste se é exibido a mensagem "No favorite pokemon found", se n houver favoritos',
    () => {
      renderWithRouter(<FavoritePokemons />);
      const notFavorite = screen.getByText('No favorite pokemon found');
      expect(notFavorite).toBeDefined();
    },
  );
  it(
    'Teste se é exibido todos os cards de pokémons favoritados',
    () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: 'More details' });
      expect(moreDetails).toBeDefined();
      userEvent.click(moreDetails);
      const btnFavorite = screen.getByLabelText('Pokémon favoritado?');
      expect(btnFavorite).toBeDefined();
      userEvent.click(btnFavorite);
      const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
      userEvent.click(linkFavorite);
      const namePokemon = screen.getByText('Pikachu');
      const typePokemon = screen.getByText('Electric');
      const pesoPokemon = screen.getByText('Average weight: 6.0 kg');
      expect(moreDetails).toBeDefined();
      expect(namePokemon).toBeDefined();
      expect(typePokemon).toBeDefined();
      expect(pesoPokemon).toBeDefined();
    },
  );
});
