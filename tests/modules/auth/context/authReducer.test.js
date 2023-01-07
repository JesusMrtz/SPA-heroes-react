import { authReducer } from "../../../../src/modules/auth/context/authReducer";
import { types } from "../../../../src/modules/auth/types/types";


describe(`Pruebas en el archivo authReducer.js`, () => {
    const initialState = {
        logged: false,
        user: null
    };


    it('Debe de retornar el estado por defecto', () => {
        const authSate = authReducer(initialState, {});

        expect( authSate ).toEqual( initialState );
    });

    it('Debe de llamar al login para autenticar y establecer el usuario', () => {
        const authState = authReducer(initialState, {
            type: types.login,
            payload: {
                id: 1,
                name: 'Jesús'
            }
        });

        expect( authState ).toEqual( { logged: true, user: { id: 1, name: 'Jesús' } } );
    });

    it('Debe de llamar al logout y borrar el usuario y dejar la propiedad logged en false', () => {
        const authState = authReducer(
            { logged: true, user: { id: 1, name: 'Jesús' } },
            {
                type: types.logout
            }
        );

        expect( authState ).toEqual( initialState );
    });
});