import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/modules/auth/context";
import { PrivateRoute } from "../../src/router/PrivateRoute";



describe(`Pruebas en el componente <PrivateRoute />`, () => {
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
                <MemoryRouter initialEntries={['/']}>
                    <Routes>
                        <Route path="/login" element={ <h1>Login</h1> } />
                        <Route path="/" element={ <PrivateRoute>
                            <h1>Ruta privada</h1>
                        </PrivateRoute> } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta privada') ).toBeTruthy();
    });


    it(`Debe ir al path '/login' si no está autenticado`, () => {
        const contextValue = {
            authState: {
                logged: false,
                user: null
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                {/* El MemoryRouter sirva para  */}
                <MemoryRouter initialEntries={['/']}>
                    <Routes>
                        <Route path="/login" element={ <h1>Login</h1> } />
                        <Route path="/" element={ <PrivateRoute>
                            <h1>Ruta privada</h1>
                        </PrivateRoute> } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Login') ).toBeTruthy();

    });

});