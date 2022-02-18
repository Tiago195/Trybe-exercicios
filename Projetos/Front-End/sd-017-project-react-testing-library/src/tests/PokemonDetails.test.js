import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import data from '../data';

describe('Teste o componente <PokemonDetails.js />', () => {
  it(
    'Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela.',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/pokemons/25');
      const resumoPilachu = data[0].summary;

      const titlePokemonDetails = screen.getByRole('heading', {
        level: 2,
        name: 'Pikachu Details',
      });
      expect(titlePokemonDetails).toBeDefined();

      const linkMoreDetails = screen.queryByRole('link', {
        name: 'More details',
      });
      expect(linkMoreDetails).toBe(null);

      const titleSummary = screen.getByRole('heading', {
        level: 2,
        name: 'Summary',
      });
      expect(titleSummary).toBeDefined();

      const resumoPokemon = screen.getByText(resumoPilachu);
      expect(resumoPokemon).toBeDefined();
    },
  );
  it(
    'Teste se existe uma seção com os mapas contendo as localizações do pokémon',
    () => {
      const { history } = renderWithRouter(<App />);
      data.forEach(({ id, name, foundAt }) => {
        history.push(`/pokemons/${id}`);

        const gameTitle = screen.getByRole('heading', {
          name: `Game Locations of ${name}`,
          level: 2,
        });
        expect(gameTitle).toBeDefined();

        const locationImgs = screen.getAllByRole('img', { name: `${name} location` });
        expect(locationImgs).toHaveLength(foundAt.length);

        foundAt.forEach(({ location, map }, index) => {
          const locationName = screen.getByText(location);
          expect(locationName).toBeDefined();

          expect(locationImgs[index]).toBeDefined();
          expect(locationImgs[index].src).toBe(map);
          expect(locationImgs[index].alt).toBe(`${name} location`);
        });
      });
    },
  );
  it(
    'Teste se o usuário pode favoritar um pokémon através da página de detalhes.',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/pokemons/25');

      const checkboxFavorite = screen.getByLabelText('Pokémon favoritado?');
      expect(checkboxFavorite).toBeDefined();

      expect(checkboxFavorite.checked).toBe(false);
      userEvent.click(checkboxFavorite);
      expect(checkboxFavorite.checked).toBe(true);
      userEvent.click(checkboxFavorite);
      expect(checkboxFavorite.checked).toBe(false);
      userEvent.click(checkboxFavorite);
      expect(checkboxFavorite.checked).toBe(true);

      expect(checkboxFavorite.parentElement).toHaveTextContent('Pokémon favoritado?');
    },
  );
});
