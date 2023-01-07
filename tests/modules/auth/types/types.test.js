import { types } from "../../../../src/modules/auth/types/types";


describe(`Pruebas en el archivo types.js`, () => {
    it(`Verificar que la propiedad login sea 'auth_login'`, () => {
        expect(types.login).toBe('auth_login');
    });

    it(`Verificar que la propiedad logout sea 'auth_logout'`, () => {
        expect(types.logout).toBe('auth_logout');
    });
});