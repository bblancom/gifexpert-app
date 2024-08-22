import { screen } from "@testing-library/dom";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('GifGrid tests', () => { 

    const category = 'One Punch';

    test('should show loading initially', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: false,
        });
        render( <GifGrid category={ category } /> )

        expect( screen.getByText( 'Cargando...' ) )
        expect( screen.getByText( category ) )
    });

    test('should show items when images are being loaded by useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render( <GifGrid category={ category } /> );

        expect( screen.getAllByRole('img').length ).toBe(2);
    });

 });