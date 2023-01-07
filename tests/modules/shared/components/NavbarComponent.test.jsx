import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../src/modules/auth/context";
import { NavbarComponent } from "../../../../src/modules/shared/components/NavbarComponent";


const mockUseNavigate = jest.fn();

/** Creamos un mock completo de react-router-dom pero solamente mockeamos el useNavigate  */
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe(`Pruebas en el componente <NavbarComponent />`, () => {
    const contextValue = {
        authState: {
            logged: true,
            user: {
                id: 1,
                name: 'Jesús'
            },

        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks() );


    it(`Debe mostrar el nombre del usuario logeado`, () => {
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/']}>
                    <NavbarComponent />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Jesús') ).toBeTruthy();
    });


    it(`Verificar si el logout fue llamado`, async () => {
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/']}>
                    <NavbarComponent />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const button = screen.getByRole('button');
        await fireEvent.click(button);
        
        expect( contextValue.logout ).toHaveBeenCalled();
    });


    it(`Verificar si el navigate fue llamado`, async () => {
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/']}>
                    <NavbarComponent us />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const button = screen.getByRole('button');
        await fireEvent.click(button);

        expect( mockUseNavigate ).toHaveBeenCalled();
        expect( mockUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});
    });
});