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
            return 'Home Page';
        }
    });

    try
    {
        await server.register(require('inert'))
//*
        server.route({
            method  : 'GET',
            path    : '/signin',
            handler : {
                file  : {
                   path : 'signin.html'
                }
            }

        });

        server.route({
            method  : 'GET',
            path    : '/signup',
            handler : {
                file  : {
                   path : 'signup.html'
                }
            }
        });

        server.route({
            method  : 'POST',
            path    : '/signin',
            handler : (request, response) => {
                const payload = request.payload;
                return JSON.stringify({ message : 'Hello' });
            }
        });

        await server.start();
        console.log('Server running on %ss', server.info.uri);
    
//*/
    }
    catch (error)
    {
        console.log('error :', error)
    }


};

initialize();