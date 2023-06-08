import { getSaludo } from '../../src/bases-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => {

    test('getSaludo debe retornar "Hola jaiver"', () => {
        const nombre = 'jaiver'; 
        const message = getSaludo(nombre);

        expect(message).toBe( `Hola ${ nombre }` )
    });

});