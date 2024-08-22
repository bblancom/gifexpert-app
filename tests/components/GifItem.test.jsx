import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Tests on GifItem component', () => {
   const title = 'Saitama';
   const url = 'https://one-punch.com/saitama.jpg';

   test('Should match the snapshot', () => {
      const { container } = render(
         <GifItem
            title={title}
            url={url}
         />
      );
      expect(container).toMatchSnapshot();
   });

   test('Picture is displayed with the right url and alt', () => {
      render(
         <GifItem
            title={title}
            url={url}
         />
      );
      const { src, alt } = screen.getByRole('img');
      expect(src).toBe(url);
      expect(alt).toBe(title);
   });

   test('Displays title on component', () => {
      render(
         <GifItem
            title={title}
            url={url}
         />
      );
      expect(screen.getByText(title)).toBeTruthy();
   });
});
