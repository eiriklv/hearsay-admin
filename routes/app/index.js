exports = module.exports = function (app, express, middleware, handlers, path) {
    app.use(path, require('./landing')(express, middleware, handlers, '/'));
    app.use(path, require('./home')(express, middleware, handlers, '/home'));
    app.use(path, require('./login')(express, middleware, handlers, '/login'));
};