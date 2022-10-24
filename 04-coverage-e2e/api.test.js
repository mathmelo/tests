const { describe, it } = require('mocha');
const request = require('supertest');
const app = require('./api');
const { deepStrictEqual } = require('assert');

describe('API Suite test', () => {
  describe('/contact', () => {
    it('should request the contact page and return HTTP Status 200', async () => {
      const response = await request(app).get('/contact').expect(200)

      deepStrictEqual(response.text, 'contact us!');
    })
  })

  describe('/hello', () => {
    it('should request an inexistent route /hello and redirect to /', async () => {
      const response = await request(app).get('/hello').expect(200)

      deepStrictEqual(response.text, 'Hello world!');
    })
  })
})