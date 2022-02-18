import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import Pokedex from '../components/Pokedex';
import data from '../data';
import { readFavoritePokemonIds } from '../services/pokedexService';

describe('Teste o componente <Pokedex.js />', () => {
  const favoritePokemonIds = readFavoritePokemonIds();
  const isPokemonFavorite = data.reduce((acc, pokemon) => {
    acc[pokemon.id] = favoritePokemonIds.includes(pokemon.id);
    return acc;
  }, {});

  const proximoPokemon = 'Próximo pokémon';
  const allPokemons = (btn) => {
    data.forEach(({ name }) => {
      const nameAtual = screen.getByText(name);
      expect(nameAtual).toBeDefined();
      userEvent.click(btn);
    });
  };

  beforeEach(() => {
    renderWithRouter(
      <Pokedex pokemons={ data } isPokemonFavoriteById={ isPokemonFavorite } />,
    );
  });

  it(
    'Teste se página contém um heading h2 com o texto Encountered pokémons.',
    () => {
      const title = screen.getByRole('heading', {
        name: 'Encountered pokémons',
        level: 2,
      });
      expect(title).toBeDefined();
    },
  );
  it(
    'Teste se é exibido o próximo Pokémon da lista',
    () => {
      const btn = screen.getByRole('button', { name: proximoPokemon });
      expect(btn.innerHTML).toBe(proximoPokemon);
      allPokemons(btn);
      const firtName = screen.getByText('Pikachu');
      expect(firtName).toBeDefined();
    },
  );
  it(
    'Teste se é mostrado apenas um Pokémon por vez.',
    () => {
      const img = screen.getAllByRole('img');
      expect(img).toHaveLength(1);
    },
  );
  it(
    'Teste se a Pokédex tem os botões de filtro.',
    () => {
      const TODOSOSTYPES = 7;
      const typeButtons = screen.getAllByTestId('pokemon-type-button');

      expect(typeButtons).toHaveLength(TODOSOSTYPES);

      const btnPsychic = typeButtons.find(({ innerHTML }) => innerHTML === 'Psychic');
      userEvent.click(btnPsychic);
      const firtPokemon = screen.getByText('Alakazam');
      expect(firtPokemon).toBeDefined();
      const btn = screen.getByRole('button', { name: proximoPokemon });
      userEvent.click(btn);
      const lastPokemon = screen.getByText('Mew');
      expect(lastPokemon).toBeDefined();
      userEvent.click(btn);
      expect(firtPokemon).toBeDefined();
      const btnAll = screen.getByRole('button', { name: 'All' });
      expect(btnAll).toBeVisible();
    },
  );
  it(
    'Teste se a Pokédex contém um botão para resetar o filtro',
    () => {
      const btn = screen.getByRole('button', { name: proximoPokemon });
      const btnAll = screen.getByRole('button', { name: 'All' });
      expect(btnAll.innerHTML).toBe('All');
      allPokemons(btn);
      userEvent.click(btnAll);
      allPokemons(btn);
    },
  );
});
