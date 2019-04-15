const Hapi = require('hapi');

const initialize = async () => {
    const server = Hapi.server({
        port :  8080,
        //host : 'usermanager'
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

        server.route({
            method  : 'GET',
            path    : '/signin/{path*}',
            handler : {
                file  : (request) => {
                    let path = request.params.path; 
                    if (!path) {
                        path = 'signin.html'
                    }
                    path = 'views/' + path;

                    return path;
                }
            }
        });

        server.route({
            method  : 'GET',
            path    : '/signup/{path*}',
            handler : {
                file  : (request) => {
                    let path = request.params.path; 
                    if (!path) {
                        path = 'signup.html'
                    }
                    path = 'views/' + path;

                    return path;
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

        server.route({
            method  : 'POST',
            path    : '/signup',
            handler : (request, response) => {
                const payload = request.payload;
                return JSON.stringify({ message : 'Hello from Sign Up' });
            }
        });

        await server.start();
        console.log('Server running on %s', server.info.uri);
    }
    catch (error)
    {
        console.log('error :', error)
    }


};

initialize();