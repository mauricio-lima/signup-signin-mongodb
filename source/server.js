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