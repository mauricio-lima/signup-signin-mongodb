const Hapi = require('hapi');

const initialize = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path:'/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });

    await server.start();
    console.log('Server running on %ss', server.info.uri);
};

initialize();