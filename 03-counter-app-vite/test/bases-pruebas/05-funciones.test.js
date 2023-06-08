import { getUser, getUsuarioActivo } from "../../src/bases-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUsuario deberia retornar un usuario', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser(); 

        expect (testUser) .toStrictEqual( user ) ;
    });


    test ('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'jaiver'
        const testUser2 = {
            uid: 'ABC567',
            username: nombre
        };

        const user2 = getUsuarioActivo(nombre); 

        expect(testUser2).toEqual(user2);

    })

});