const Service = require('./service');
const { stub } = require('sinon');
const { deepStrictEqual } = require('assert');
const { apiURLS } = require('./constants');

const mock = {
  tatooine: require('./mocks/tatooine.json'),
  alderaan: require('./mocks/alderaan.json')
};

;(async () => {
  // Chamada da API original
  // {
  //   const service = new Service();
  //   const withoutStub = await service.makeRequest(apiURLS.BASE_URL_2);
  //   console.log(JSON.stringify(withoutStub));
  // }

  const service = new Service();
  const stubado = stub(service, service.makeRequest.name);

  stubado.withArgs(apiURLS.BASE_URL_1).resolves(mock.tatooine);
  stubado.withArgs(apiURLS.BASE_URL_2).resolves(mock.alderaan);

  {
    const expected = {
      "name": "Tatooine",
      "surfaceWater": "1",
      appearedIn: 5,
    }

    const results = await service.getPlanets(apiURLS.BASE_URL_1);
    deepStrictEqual(results, expected);
  }
  {
    const expected = {
      "name": "Alderaan",
      "surfaceWater": "40",
      appearedIn: 2,
    }

    const results = await service.getPlanets(apiURLS.BASE_URL_2);
    deepStrictEqual(results, expected);
  }
})();