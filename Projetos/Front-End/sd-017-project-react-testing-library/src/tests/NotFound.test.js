import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../components/NotFound';

describe('Teste o componente <NotFound.js />', () => {
  it(
    'Teste se página contém um heading h2 com o texto Page requested not found 😭;',
    () => {
      renderWithRouter(<NotFound />);
      const notFound = screen.getByRole('heading', { name: /Page requested not found/i,
        level: 2 });
      expect(notFound).toBeDefined();
    },
  );
  it(
    'Teste se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif.',
    () => {
      renderWithRouter(<NotFound />);
      const gif = screen.getByAltText(/Pikachu crying because the/i);
      expect(gif.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    },
  );
});
