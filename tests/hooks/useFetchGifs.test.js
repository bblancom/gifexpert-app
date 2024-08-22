import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


describe('useFetchGifs tests', () => { 
    
    test('should default state', () => {

        const { result } = renderHook( () => useFetchGifs('One punch'));
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('should return images array and isLoading false', async () => {

        const { result } = renderHook( () => useFetchGifs('One punch'));
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
        
    });

 })