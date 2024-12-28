import request from 'supertest';
import { expect } from 'chai';
import app from '../../app.js';

// Prueba unitaria para la API de chistes
// Pasos para ejecutar la prueba a través de la terminal:
// 1. Instalar las dependencias: npm install
// 2. Ejecutar la prueba: npm test

describe('Pruebas sobre la API de chistes', () => {

    describe('GET /api/jokes', () => {
        it('Debería devolver un chiste de Chuck Norris', async () => {
            const response = await request(app).get('/api/joke?type=Chuck');

            expect(response.status).to.equal(200);
        });
        it('Debería devolver un chiste de papá', async () => {
            const response = await request(app).get('/api/joke?type=Dad%20Joke');

            expect(response.status).to.equal(200);
        });
        it('Debería devolver un chiste propio', async () => {
            const response = await request(app).get('/api/joke?type=Propio');

            if (response.status === 200) {
                expect(response.status).to.equal(200);
            } else if (response.status === 404) {
                expect(response.status).to.equal(404);
                expect(response.body.message).to.equal('Aún no hay chistes, cree uno!');
            } else {
                throw new Error(`Unexpected status code: ${response.status}`);
            }
        });
    });

});