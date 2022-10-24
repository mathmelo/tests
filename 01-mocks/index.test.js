const { rejects, deepStrictEqual } = require('assert');
const { error } = require('./src/constants');
const File = require('./src/file');

;(async () => {
  {
    const filePath = './mocks/emptyFile-invalid.csv';
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = './mocks/fourItems-invalid.csv';
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = './mocks/threeItems-valid.csv';
    const result = await File.csvToJson(filePath);
    const expected = [
      {
        "id": 123,
        "name": "Matheus Melo",
        "profession": "Javascript Expert",
        "birthDay": 2000
      },
      {
        "id": 321,
        "name": "Xuxa Meneguel",
        "profession": "Actor",
        "birthDay": 1937
      },
      {
        "id": 334,
        "name": "Pedrinho",
        "profession": "Java Developer",
        "birthDay": 1992
      }
    ];

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
  }

})()