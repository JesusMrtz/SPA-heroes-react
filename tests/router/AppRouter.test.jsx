import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/modules/auth/context";
import { AppRouter } from "../../src/router/AppRouter";


describe(`Pruebas en el <AppRouter />`, () => {
    it(`Debe de mostrar el login si no está autenticado`, () => {
        const contextValue = {
            authState: {
                logged: false
            }
        }
        render(
            <MemoryRouter initialEntries={['/']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getByText('Login') ).toBeTruthy();
    });

    it('Debe mostrar el componente de marvel si está autenticado', () => {
        const contextValue = {
            authState: {
                logged: true,
                user: {
                    id: 1,
                    name: 'Karely'
                }
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Karely') ).toBeTruthy();
    });
});