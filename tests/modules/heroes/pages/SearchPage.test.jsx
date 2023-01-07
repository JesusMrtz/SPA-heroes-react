import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchPage } from "../../../../src/modules/heroes/pages/SearchPage";


const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));


describe(`Pruebas en page <SearchPage />`, () => {
    it(`Debe de mostrarse correctamente con los valores por defecto`, () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect( container ).toMatchSnapshot();
    });

    beforeEach(() => jest.clearAllMocks() );


    it(`Debe de mostrarse a Batman y el input con el query-string`, () => {
        render(
            <MemoryRouter initialEntries={ ['/superheroes/search?q=batman'] }>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');

        const imgBatman = screen.getByRole('img');
        expect( imgBatman.src ).toContain('batman');
    });


    it(`Debe de mostrar un error si no se encuentra el heroe`, () => {
        render(
            <MemoryRouter initialEntries={ ['/superheroes/search?q=karely'] }>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('karely');

        const errorDiv = screen.getByTestId('alert-danger');
        expect( errorDiv.style.display ).toBe('block');
    });


    it(`Debe de llamar al navigate a la pantalla nueva`, async () => {
        render(
            <MemoryRouter initialEntries={ ['/superheroes/search'] }>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        await fireEvent.change(input, { target: { name: 'searchText', value: 'batman' } });

        const formInput = screen.getByTestId('form');
        await fireEvent.submit( formInput );

        expect( mockUseNavigate ).toHaveBeenCalled();
        expect( mockUseNavigate ).toHaveBeenCalledWith('?q=batman');
    });
});