const http = require('http');

const routes = {
  '/contact:get': (request, response) => {
    response.write('contact us!');
    return response.end();
  },
  default: (request, response) => {
    response.write('Hello world!');
    return response.end();
  }
}

const handler = function (request, response) {
  const { url, method } = request;
  const routeKey = `${url}:${method.toLowerCase()}`;
  const chose = routes[routeKey] || routes.default;

  response.writeHead(200, {
    'Content-Type': 'text/html'
  });

  return chose(request, response);
}

const app = http.createServer(handler)
  .listen(3333, () => console.log('> Server running at', 3333));

  module.exports = app;
