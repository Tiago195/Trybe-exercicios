import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../components/About';

describe('Teste o componente "<About.js />".', () => {
  it(
    'Teste se a página contém as informações sobre a Pokédex.',
    () => {
      renderWithRouter(<About />);
      const informacaoP1 = screen.getByText(/This application simulates a Pokédex, a/);
      const informacaoP2 = screen.getByText(/One can filter Pokémons by type/);
      [informacaoP1, informacaoP2].forEach((element) => {
        expect(element).toBeDefined();
      });
    },
  );
  it(
    'Teste se a página contém um heading h2 com o texto About Pokédex.',
    () => {
      renderWithRouter(<About />);
      const title = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
      expect(title).toBeDefined();
    },
  );
  it(
    'Teste se a página contém dois parágrafos com texto sobre a Pokédex.',
    () => {
      renderWithRouter(<About />);
      const informacaoP1 = screen.getByText(/This application simulates a Pokédex, a/);
      const informacaoP2 = screen.getByText(/This application simulates a Pokédex, a/);
      const arrayDeParagrafos = [informacaoP1, informacaoP2];
      expect(arrayDeParagrafos).toHaveLength(2);
    },
  );
  it(
    'Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png.',
    () => {
      renderWithRouter(<About />);
      const informacaoP1 = screen.getByRole('img').src;
      expect(informacaoP1).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    },
  );
});
