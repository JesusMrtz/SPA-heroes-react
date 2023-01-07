import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/modules/auth/context";
import { PublicRoute } from "../../src/router/PublicRoute";



describe(`Pruebas en el componente <PublicRoute />`, () => {
    it(`Debe mostrar el children si no está autenticado`, () => {
        const contextValue = {
            authState: {
                logged: false,
                user: null
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta pública') ).toBeTruthy();
    });


    it(`Debe ir al path '/' si está autenticado`, () => {
        const contextValue = {
            authState: {
                logged: true,
                user: {
                    id: 1,
                    name: 'Jesús'
                }
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                {/* El MemoryRouter sirva para  */}
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='/' element={ <h1>Página de marvel</h1> } />
                        <Route path='login' element={ <PublicRoute>
                            <h1>Ruta pública</h1>
                        </PublicRoute> } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Página de marvel') ).toBeTruthy();
    });
});